import React from "react";
import i1 from '../images/image 22.png'
import i2 from '../images/image 23.png'
import i3 from '../images/image 24.png'
import i4 from '../images/image 25.png'
import i5 from '../images/image 26.png'
import i6 from '../images/image 27.png'
import i7 from '../images/image 28.png'
import i8 from '../images/image 29.png'
import i9 from '../images/image 30.png'

export default class Header extends React.Component{
    render(){
        return(
            <div className="header-image">
                <div className="first-col">
                    <img src={i1}/>
                </div>
                <div className="second-col">
                    <img src={i9}/>
                    <img src={i3}/>
                </div>
                <div className="third-col">
                    <img src={i4}/>
                    <img src={i5}/>
                </div>
                <div className="fourth-col">
                    <img src={i6}/>
                    <img src={i7}/>
                </div>
                <div className="fifth-col">
                    <img src={i8}/>
                    <img src={i2}/>
                </div>
            </div>
        )
    }
}
