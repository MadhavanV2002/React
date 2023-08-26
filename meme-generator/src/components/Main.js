import React from "react";
export default function Main(){
    const [memesData,setmemsData] = React.useState({
        topText : "",
        bottomText : "",
        randomURL : ""
    })
    const [Data,setData] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) => setData(data.data.memes))
       
    },[])
    function handleChange(event){
        const {name,value} = event.target
        setmemsData((oldData) => {
            return {
                ...oldData,
                [name] : value
            }
        })
    }
    function RandomURL(){
        const arr = Data
        const randomIndex = Math.floor(Math.random() * arr.length)
        const URL = arr[randomIndex].url
        setmemsData((oldData) => {
            return {
                ...oldData,
                randomURL : URL
            }
        })
    }
    return(
        <div className="main-container">
            <div className="input-text-container">
                <input type="text" placeholder="top text" name="topText" onChange={handleChange} value={memesData.topText}/>
                <input type="text" placeholder="bottom text" name="bottomText" onChange={handleChange} value={memesData.bottomText}/>
            </div>
            <button onClick={RandomURL}>Get a new meme image</button>
            <div className="meme-container">
             <img src={memesData.randomURL} width="477px" height="268px" className="meme-img"/>
             <p className="toptext">{memesData.topText}</p>
             <p className="bottomtext">{memesData.bottomText}</p>
            </div>
        </div>
    )
}