import React from "react";
import contrast1 from '../images/contrast1.png'
import discord from '../images/discord.png'
import enlarge from '../images/enlarge.png'
import logout from '../images/logout.png'
import contrast from '../images/contrast.png'
import flash from '../images/Flash.png'
import limitations from '../images/Limitations.png'
import send from '../images/send.png'

const Sidebar = (
    <div className="side-bar">
        <input type="text" placeholder="+   New chat" className="side-input"/>
        <div className="side-options">
            <div className="option">
                <img src={contrast1}/>
                <p>Light mode</p>
            </div>
            <div className="option">
                <img src={discord}/>
                <p>OpenAI Discord</p>
            </div>
            <div className="option">
                <img src={enlarge}/>
                <p>Updates & FAQ</p>
            </div>
            <div className="option">
                <img src={logout}/>
                <p>Log out</p>
            </div>
        </div>
    </div>
)
const main = (
    <div className="main-container">
        <div className="main-data-container">
            <h1>ChatGPT</h1>
            <div className="data-container">
                <div className="row">
                    <img src={contrast}/>
                    <h2>Examples</h2>
                    <p>“Explain quantum computing in simple terms” →</p>
                    <p>“Got any creative ideas for a 10 year old's birthday?” →</p>
                    <p>“How do I make an HTTP request in Javascript?” →</p>
                </div>
                <div className="row">
                    <img  src={flash}/>
                    <h2>Capabilities</h2>
                    <p>Remembers what user said earlier in the conversation</p>
                    <p>Allows user to provide follow-up corrections</p>
                    <p>Trained to decline inappropriate requests</p>
                </div>
                <div className="row">
                    <img src={limitations}/>
                    <h2>Limitations</h2>
                    <p>May occasionally generate incorrent information</p>
                    <p>May occasionally produce harmful instructions or biased content</p>
                    <p>Limited knowledge of world and events after 2021</p>
                </div>
            </div>
        </div>
        <div className="text-field">
            <input type="text" className="text-input"/>
            <img src={send}/>
        </div>  
        <p className="foot-text"><a href="">ChatGPT Jan 9 Version.</a> Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
    </div>
)
export default function Home(){
    return(
        <div className="container">
            {Sidebar}
            {main}
        </div>
    )
}