import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";



const App = () => {
  return(
    <main className="max-auto bg-black ">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )

}

export default App;