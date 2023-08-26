import React from "react";
import card1 from '../images/1.png'
import card2 from '../images/2.png'
import star from '../images/Star 1.png'

function Card(props){
    let badge
    if(props.sold===0){
        badge="ONLINE"
    }
    else{
        badge="SOLD OUT"
    }
    return(
        <div className="card">
            <p className="badge">{badge}</p>
            <img src={props.img}/>
            <div className="rating">
                <img className="star" src={star}/>
                <p>{props.country}</p>
            </div>
            <p className="card-info">{props.info}</p>
            <p><b>{props.price}</b> / person</p>
        </div>
    )
}

const cards = [
    {image:card1,country:'5.0 (6) USA',info:'Life lesson with kattie zaferes',price:'From $136',sold:1},
    {image:card2,country:'5.0 (6) USA',info:'Learn wedding photography',price:'From $150',sold:0},
    {image:card1,country:'4.0 (6) USA',info:'Group mountain biking',price:'From $46',sold:0},
    {image:card1,country:'4.0 (6) USA',info:'Group mountain biking',price:'From $46',sold:1},
    {image:card1,country:'4.0 (6) USA',info:'Group mountain biking',price:'From $46',sold:0},
    {image:card1,country:'4.0 (6) USA',info:'Group mountain biking',price:'From $46',sold:1},
    {image:card1,country:'4.0 (6) USA',info:'Group mountain biking',price:'From $46',sold:0}
]

export default function Cardcont()
{
    const printcards = cards.map((item) =>  <Card img={item.image} country={item.country} info={item.info} price={item.price} sold={item.sold}/>
    )
    return(
        <div className="cards-container">
            {printcards}
        </div>
    )
}