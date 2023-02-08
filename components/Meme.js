import React from "react";
import mamesData from "../memesData.js"

export default function Meme(){
    function getMemeImage(){
        console.log("Clicked")
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