import { AppNav } from "./components/AppNav.tsx";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

export default function App() {
    return (
        <>
            <AppNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}