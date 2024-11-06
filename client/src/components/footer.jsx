import axios from 'axios';
import React,{useState,useEffect} from 'react';


function Footer(){
    return(
        <div id="footer">
            <div id="about">
                <h1 id="abouthead">ABOUT</h1>
                <div id="abouttext1">
                <h2 id="abouttext">Ashish </h2>
                <h2 id="abouttext">B TECH CSE</h2>
                <h2 id="abouttext">2nd YEAR</h2>
                <h2 id="abouttext">LPU PUNJAB</h2>
                </div>
            </div>
            <div id="line"></div>
            <div id="links">
                <h1 id="abouthead">PROFILES</h1>

                <a href="https://github.com/codingbyash"><img  id="abimg" src="../../image/icons8-github.svg"  alt="" /></a>
                <a href="www.linkedin.com/in/ashishkumar--"><img  id="abimg" src="../../image/icons8-linkedin.svg"  alt="" /></a>

            </div>
        </div>
    )
}

export default Footer;