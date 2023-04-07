import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ width: "85%", margin: "auto" }}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
