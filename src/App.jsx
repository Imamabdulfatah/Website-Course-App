import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

import Home from "./pages/Home";
import Class from "./pages/Class";
import Condition from "./pages/Condition";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/kelas" Component={Class} />
        <Route path="/testimonial" Component={Testimonial} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat" Component={Condition} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
