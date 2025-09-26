import { useState } from "react";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
