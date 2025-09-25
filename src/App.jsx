import { useState } from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";

import { ticketsData } from "./data/ticketsData";

function App() {
    return(
    <>
    <Navbar />
    </>
    );
}

export default App;
