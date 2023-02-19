import React from "react";
import mamesData from "../memesData.js"

let url
export default function Meme(){
const [memeImage,setMemeImage]= React.useState("")
    function getMemeImage(){
    const memesArray = mamesData.data.memes
    const randomNumber = Math.floor(Math.random()* memesArray.length)
    url = memesArray[randomNumber].url
    setMemeImage(memesArray[randomNumber].url)
}
    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input">

                </input>
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme--Image"src={memeImage} />
        </main>
    )
}