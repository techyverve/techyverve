import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Main() {
  return (
    <div className="w-full">
      <Navbar/>
      {/* Full viewport height with black background */}
      <div className="w-full h-screen bg-black relative">
        <Home
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      {/* Ensure About starts after Home completes */}
      <div className="w-full">
        <About/>
      </div>
      <div className="w-full">
        <Services/>
      </div>
      {/* <div className="w-full">
        <Projects/>
      </div> */}
      <div className="w-full">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}