import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="mt-20">
          <Home/>
          <About/>
          <Portfolio/>
          <Services/>
          <Contact/>
          <Footer/>
      </div>
  
    </div>
  );
}

export default App;
