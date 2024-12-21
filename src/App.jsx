import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
        
            <Route path='/' element={<Header />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <Copyright />
    </>
  )
}

export default App;
