// Code Keypad Component Here
import React from "react";


function Keypad(){

    function enterPassword(e){
        console.log("Entering password...")
    }

    return(
        <input type="password" onChange={enterPassword}/>
    )
}



export default Keypad