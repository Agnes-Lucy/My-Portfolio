import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About"
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="Body">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
