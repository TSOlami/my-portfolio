import{ About, Contact, Hero, Navbar, Works, StarsCanvas, Skills, Footer } from './components';


const App = () => {
  return (
   <>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Works />
     <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
     </div>
     <Footer />
   </>
  )
}

export default App
