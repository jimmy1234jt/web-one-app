import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import MainNav from "./Components/MainNav";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Store from "./Pages/Store";
import About from "./Pages/About"
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/store" exact Component={Store} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
