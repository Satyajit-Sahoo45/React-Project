import React from "react";
import web from "../src/images/download.png";
import {NavLink} from 'react-router-dom';
import Common from "./Common";

const Home = () => {
    return (
        <>
              <Common name='Grow Your Bussiness With ' imgsrc={web} visit='/service' btname='Get Started'/>
        </>
    );
};

export default Home;