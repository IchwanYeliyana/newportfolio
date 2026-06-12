import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero"
import About from "./Component/About"
import Skill from "./Component/Skill"
import Services from "./Component/Services"
import Projects from "./Component/Projects"
import Testimonials from "./Component/Testimonials"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-sine",
    })
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skill />
      {/* <Services /> */}
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App;
