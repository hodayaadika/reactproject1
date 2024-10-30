import React from "react";
import React, { useState } from 'react';
const enKeyboard=["a","b","C","d","e","f","g","h","i","j","k","l","m","o","g","q","r","s","t","u","v","w","x","y","z","/","!","?"];

const hekeyboard=["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","/","!","?"];

function App1(){
    const [language, setLanguage]=useState(enKeyboard);

    return(
        <>
        <h1>our keyboard</h1>
        <div id=" keyboard">
        </div>
        </>
    )

}