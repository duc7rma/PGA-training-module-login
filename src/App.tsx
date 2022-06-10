import React from "react";
import LoginPage from "./modules/auth/pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/home/Home/index";
import Contact from "./modules/home/Contact/index";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
