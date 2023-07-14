import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="Body">
        <header>
          <nav className="Nav">
            <NavLink to="/" id="Name">Home</NavLink>
             <NavLink to="about">About</NavLink>
             {/* <NavLink to="portfolio">Portfolio</NavLink> */}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
           {/* <Route path="portfolio" element={<Portfolio/>}/> */}
        </Routes>
        <ContactMe />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
