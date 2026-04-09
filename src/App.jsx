import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <navba >
        <Link style={{ margin: "0 10px" }} to="/" mx-3 my-4>
          Home
        </Link>
        <Link to="/about" mx-4 my-4>
          About
        </Link>
      </navba>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h>Error 404: Not found</h>} />
      </Routes>
      <footer>Made with Hate!</footer>
    </>
  );
}

export default App;
