import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Skills, } from './components';


const App = () => {
  return (
   <BrowserRouter>
   <div className="relative z-0">
     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
     </div>
     <About />
     <Skills />
     <Tech />
     <Experience />
     <Works />
     <Feedbacks/>
     <div>
      <Contact />
      <StarsCanvas />
     </div>

   </div>
   </BrowserRouter>
  )
}

export default App
