import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <div>
        <div className="px-4 md:px-12 lg:px-36 max-w-screen-xl 2xl:px-0 mx-auto">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/SignUp" element={<SignUp />} />
            <Route path="/pages/LogIn" element={<LogIn />} />
          </Routes>
          {/* footer */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
