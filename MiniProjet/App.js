import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Mycontacts from "./Mycontacts";
import Home from "./Home";
import Myposts from "./Myposts";
import { FaHome } from "react-icons/fa";
import Addcontact from "./components/AddContact";
import Addpost from "./components/AddPost";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="links">
            <h3>
              {" "}
              <Link to="/">
                <FaHome />
              </Link>
            </h3>
            <h1>
              <Link to="Mycontacts">Contact</Link>
            </h1>
            <h1>
              <Link to="Myposts">Blog</Link>
            </h1>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mycontacts" element={<Mycontacts />} />
          <Route path="/Myposts" element={<Myposts />} />
          <Route path="/create" element={<Addcontact />} />
          <Route path="/create2" element={<Addpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
