"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Home = ({
  color = [1.0, 1.0, 1.0],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  className = "",
  style = {},
  ...rest
}) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef();
  const rendererRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const isInitializedRef = useRef(false);
  const mouseStateRef = useRef({
    current: [0.5, 0.5],
    target: [0.5, 0.5]
  });

  const colorArray = useMemo(() => [...color], [color]);

  const handleResize = useCallback(() => {
    if (!containerRef.current || !rendererRef.current || !programRef.current) return;
    
    const { clientWidth, clientHeight } = containerRef.current;
    
    const canvas = rendererRef.current.gl.canvas;
    if (canvas.width === clientWidth && canvas.height === clientHeight) return;
    
    rendererRef.current.setSize(clientWidth, clientHeight);
    programRef.current.uniforms.iResolution.value.r = clientWidth;
    programRef.current.uniforms.iResolution.value.g = clientHeight;
    programRef.current.uniforms.iResolution.value.b = clientWidth / clientHeight;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    mouseStateRef.current.target = [x, y];
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseStateRef.current.target = [0.5, 0.5];
  }, []);

  const animate = useCallback((t) => {
    if (!programRef.current) return;

    if (enableMouseInteraction) {
      const smoothing = 0.05;
      const mouse = mouseStateRef.current;
      mouse.current[0] += smoothing * (mouse.target[0] - mouse.current[0]);
      mouse.current[1] += smoothing * (mouse.target[1] - mouse.current[1]);
      programRef.current.uniforms.uMouse.value[0] = mouse.current[0];
      programRef.current.uniforms.uMouse.value[1] = mouse.current[1];
    } else {
      programRef.current.uniforms.uMouse.value[0] = 0.5;
      programRef.current.uniforms.uMouse.value[1] = 0.5;
    }

    programRef.current.uniforms.iTime.value = t * 0.001;

    if (rendererRef.current && meshRef.current) {
      rendererRef.current.render({ scene: meshRef.current });
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [enableMouseInteraction]);

  const initializeWebGL = useCallback(() => {
    if (!containerRef.current || isInitializedRef.current) return;

    const container = containerRef.current;
    
    try {
      const renderer = new Renderer({ 
        alpha: true,
        antialias: false,
        powerPreference: "high-performance"
      });
      
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Color(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height
            ),
          },
          uColor: { value: new Color(...colorArray) },
          uAmplitude: { value: amplitude },
          uDistance: { value: distance },
          uMouse: { value: new Float32Array([0.5, 0.5]) },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      rendererRef.current = renderer;
      programRef.current = program;
      meshRef.current = mesh;
      isInitializedRef.current = true;

      window.addEventListener("resize", handleResize);
      if (enableMouseInteraction) {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }

      handleResize();
      animationFrameId.current = requestAnimationFrame(animate);

    } catch (error) {
      console.error("Failed to initialize WebGL:", error);
    }
  }, [colorArray, amplitude, distance, enableMouseInteraction, handleResize, handleMouseMove, handleMouseLeave, animate]);

  useEffect(() => {
    if (!programRef.current) return;
    
    programRef.current.uniforms.uColor.value = new Color(...colorArray);
    programRef.current.uniforms.uAmplitude.value = amplitude;
    programRef.current.uniforms.uDistance.value = distance;
  }, [colorArray, amplitude, distance]);

  useEffect(() => {
    initializeWebGL();
  }, [initializeWebGL]);

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      window.removeEventListener("resize", handleResize);

      if (containerRef.current && enableMouseInteraction) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }

      if (rendererRef.current && containerRef.current) {
        const canvas = rendererRef.current.gl.canvas;
        if (containerRef.current.contains(canvas)) {
          containerRef.current.removeChild(canvas);
        }
        
        const ext = rendererRef.current.gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }

      rendererRef.current = null;
      programRef.current = null;
      meshRef.current = null;
      isInitializedRef.current = false;
    };
  }, [handleResize, handleMouseMove, handleMouseLeave, enableMouseInteraction]);

return (
  <>
    {/* DM Sans Font Import */}
    <style>
      {`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');`}
    </style>
    
    <div
      ref={containerRef}
      className={`w-full h-screen relative overflow-hidden ${className}`}
      style={{
        background: `
          linear-gradient(135deg, 
            #000000 0%, 
            #111111 25%, 
            #1a1a1a 50%, 
            #0d0d0d 75%, 
            #000000 100%
          )
        `,
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
        ...style
      }}
      {...rest}
    >
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="mb-8 tracking-tight leading-tight">
          <div 
            className="text-base md:text-lg lg:text-xl text-gray-300 font-light mb-4 opacity-90"
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              letterSpacing: '0.1em',
              fontWeight: '300'
            }}
          >
            Welcome to
          </div>
          <div 
            className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textShadow: '0 2px 7px rgba(255,255,255,0.2)',
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.2))',
              fontWeight: '800'
            }}
          >
            TechyVerve
          </div>
        </h1>
        
        <p 
          className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light opacity-95"
          style={{ 
            fontFamily: "'DM Sans', sans-serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
            lineHeight: '1.6',
            fontWeight: '400'
          }}
        >
          We create innovative software solutions and stunning websites that help businesses{" "}
          <span 
            className="text-white font-medium"
            style={{ 
              textShadow: '0 0 20px rgba(255,255,255,0.5)',
              fontWeight: '600'
            }}
          >
            thrive
          </span>{" "}
          in the digital world
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative bg-white text-black px-10 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 flex items-center justify-center gap-3"
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              boxShadow: '0 10px 40px rgba(255,255,255,0.1)'
            }}
          >
            View Our Work
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative border-2 border-gray-300 text-gray-100 px-10 py-4 rounded-xl font-medium text-lg hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '500',
              boxShadow: '0 10px 40px rgba(255,255,255,0.05)'
            }}
          >
            Get Started
          </button>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-200 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        /* Ensure fonts load properly */
        * {
          font-display: swap;
        }
      `}</style>
    </div>
  </>
);
};

export default Home;