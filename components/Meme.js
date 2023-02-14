import React from "react";
import mamesData from "../memesData.js"

let url
export default function Meme(){
    function getMemeImage(){
    const memesArray = mamesData.data.memes
    const randomNumber = Math.floor(Math.random()* memesArray.length)
    url = memesArray[randomNumber].url
    console.log(url)
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
        </main>
    )
}