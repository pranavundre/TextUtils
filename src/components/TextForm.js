import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    // text.select();
    text.setSelectionRange(0, -1);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="mb-3 container"
        style={{
          color: props.mode === "light" ? "#444a50" : "white",
        }}
      >
        <h1 className="mb-4">TextUtils - Text Capitalizer</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#303438" : "white",
              color: props.mode === "dark" ? "white" : "#444a50",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#444a50",
        }}
      >
        <h3>Your text Summary</h3>
        <p>
          {
            text.split(" ").filter((a) => {
              return a.length !== 0;
            }).length
          }{" "}
          Words | {text.length} Characters
        </p>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#444a50",
        }}
      >
        <h3>Time To Read</h3>
        <p>
          {text.split(" ").filter((a) => {
            return a.length !== 0;
          }).length * 0.005}{" "}
          Minutes
        </p>
      </div>
    </>
  );
}
