import{ About, Contact, Hero, Navbar, Works, StarsCanvas, Skills, Footer } from './components';


const App = () => {
  return (
   <>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Works />
     <div>
      <Contact />
      <StarsCanvas />
     </div>
     <Footer />
   </>
  )
}

export default App
