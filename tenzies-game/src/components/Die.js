import React from "react";

export default function Die(props){
    const style = {
        backgroundColor : props.win?"#59E391":(props.lose?"rgb(241, 78, 78)":(props.isHeld?"pink":"white"))
    }
    return (
        <h2  onClick={props.HoldHeld} style={style} className="die-face">{props.value}</h2>
    )
}