import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Main() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}