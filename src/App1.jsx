//import React from "react";
import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import Language from "./components/Language";
import EditKey from "./components/EditKey";

const enKeyboard = [
  "a","b","c","d","e","f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "g",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "/",
  "!",
  "?",
];

const heKeyboard = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
  "ץ",
  "ם",
  "ף",
  "ן",
  "ך",
  "/",
  "!",
  "?",
];
const ENkeyboard = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "Z",
  "/",
  "!",
  "?",
];

function App1() {
  const [text, setText] = useState("");

  const displayText = (char) => {
    setText(text + char);
  };

  const deleteChar=()=>{
    setText(text.replace(text[text.length-1],""));
  };
  const reset=()=>{
    setText("");
  }

  const space=()=>{
    const newtext = text+ " ";
    setText(newtext);
  };

  const [language, setLanguage] = useState(heKeyboard);
  const ChangeLanguage = (lan) => {
    console.log("lan: ", lan);
    setLanguage(lan);
  };
  const ChangePosition = (pos) => {
    pos === "upper" ? setLanguage(ENkeyboard) : setLanguage(enKeyboard);
  };

  return (
    <>
      <h1>our keyboard!</h1>
      <p>{text}</p>
      <div id="keyboard">
        {language.map((item, i) => (
          <Keyboard
            displayText={displayText}
            id={i + 1}
            key={`CharNum${i + 1}`}
            thisChar={item}
          />
        ))}
      </div>
      
      <div id="edit">
        <EditKey ChangePosition={ChangePosition}
        deleteChar={deleteChar}
        space={space}
        reset={reset}/>
        <div id="language">
          <h3>Choose language:</h3>
        <Language
          ChangeLanguage={ChangeLanguage}
          he={heKeyboard}
          en={enKeyboard}
          EN={ENkeyboard}
        />
      </div>
        
      </div>

      
    </>
  );
}
export default App1;
