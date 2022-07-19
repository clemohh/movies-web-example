import "./App.css";
import Contact from "../src/components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>  

      <Navbar/>
      <Home/>
      <Movies/>
      <Contact/>
      <Footer/>
   
    </>
  );
}

export default App;