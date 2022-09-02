
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Hero/Home";
import Project from "./Components/Project/Project";
import Service from "./Components/Service/Service";
import Footers from "./Components/Footers";
import About from "./Components/About/About";


function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
       <Service/>
       <Project/>
       <Blog/>
       <Contact />
       <Footers/>
    </div>
  );
}

export default App;