//import React from "react";
import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import Language from "./components/Language";
import EditKey from "./components/EditKey";
import StyleChar from "./components/StyleChar";

const enKeyboard = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
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
  const [fontSize, setFontSize] = useState(50);
  const changeFont = (size) => {
    setFontSize(size);
  };
  const [color, setColor] = useState("black");
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const [text, setText] = useState([]);

  const displayText = (char) => {
    let newSpan = (
      <span style={{ fontSize: fontSize, color: color }}>{char}</span>
    );
    console.log("char: ", char);
    setText((text) => [...text, newSpan]);
  };

  const deleteChar = () => {
    let newText = [...text];
    setText(newText.slice(0, -1));
  };

  const reset = () => {
    setText([]);
  };

  const space = () => {
    let newSpan = <span> </span>;
    setText((text) => [...text, newSpan]);
  };
  const enter = () => {
    let newSpan = (
      <span>
        {" "}
        <br />{" "}
      </span>
    );
    setText((text) => [...text, newSpan]);
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

      <EditKey
        ChangePosition={ChangePosition}
        deleteChar={deleteChar}
        space={space}
        reset={reset}
        enter={enter}
      />

      <Language
        ChangeLanguage={ChangeLanguage}
        he={heKeyboard}
        en={enKeyboard}
        EN={ENkeyboard}
      />

      <StyleChar changeFont={changeFont} changeColor={changeColor} />
    </>
  );
}
export default App1;
