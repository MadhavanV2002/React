import React from "react";
import Navimg from '../images/Navimage.png'

export default function Navbar(){
    return(
        <nav>
            <img src={Navimg} />
            <h2>Meme Generator</h2>
            <p>React Course - Project 3</p>
        </nav>
    )
}
