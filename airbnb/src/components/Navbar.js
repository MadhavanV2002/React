import React from 'react'
import navlogo from '../images/navlogo.png'
export default class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <img src={navlogo}/>
            </nav>
        )
    }
}