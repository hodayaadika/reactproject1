//import React from "react";
import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
const enKeyboard = [
  "a",
  "b",
  "C",
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

const hekeyboard = [
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
  "/",
  "!",
  "?",
];

function App1() {
  // const [language, setLanguage]=useState(enKeyboard);

  return (
    <>
      <h1>our keyboard!</h1>
      <div id=" keyboard">
        {enKeyboard.map((item, i) => (
          <Keyboard id={i + 1} key={`CharNum${i + 1}`} thisChar={item} />
        ))}
      </div>
    </>
  );
}
export default App1;
