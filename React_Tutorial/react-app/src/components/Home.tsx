import { useState } from "react";
import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Alert from "./Alert";
import Button from "./Button";
import About from "./About.js";
import Register from "./users/Register.js";
import React from "react";
const Home = () => {
    return (
        <>
            <h1 style={{ color: "green" }}>
               
            </h1>
            <button name="login"> login</button>
            <button name="Register"> login</button>
        </>
    );
};
 
export default Home;