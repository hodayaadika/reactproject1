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
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
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
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
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
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

function App1() {
  const [style, setStyle] = useState({
    fontSize: 50,
    color: "black",
    fontFamily: "Arial",
  });

  const changeFont = (size) => {
    setStyle((style) => ({ ...style, fontSize: size }));
  };

  const changeColor = (newColor) => {
    setStyle((style) => ({ ...style, color: newColor }));
  };

  const changeFontStyle = (newFontStyle) => {
    setStyle((style) => ({ ...style, fontFamily: newFontStyle }));
  };

  const [text, setText] = useState([]);

  const displayText = (char) => {
    let newSpan = <span style={style}>{char}</span>;
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
        <br />
      </span>
    );
    setText((text) => [...text, newSpan]);
  };

  const [language, setLanguage] = useState(heKeyboard);
  const ChangeLanguage = (lan) => {
    setLanguage(lan);
  };
  const ChangePosition = (status) => {
    status === "upper" ? setLanguage(ENkeyboard) : setLanguage(enKeyboard);
  };

  return (
    <>
      <h1>Our keyboard:</h1>
      <pre>
        <span>
          <br />
        </span>
        {text}
      </pre>
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

      <StyleChar
        changeFont={changeFont}
        changeColor={changeColor}
        changeFontStyle={changeFontStyle}
      />
    </>
  );
}
export default App1;
