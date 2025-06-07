import { Link, Route, Routes } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function Navbar() {
    return(
        <>
            <nav>

                <Link to="/home" className="Link">Home</Link>
                <Link to="/about" className="Link">About</Link>
                <Link to="/contact" className="Link">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}