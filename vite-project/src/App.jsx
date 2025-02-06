import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("");
  const addToDisplay = (val) => {
    val.toString() == "clear"
      ? setView("")
      : setView(view.toString() + val.toString());
  };
  const doCalculate = () => {
    let result;
    try {
      result = eval(view).toString();
    } catch (e) {
      console.log(view);
      console.log(e);
      view.toString()!=""? result = "Invalid Expression":result = "";
    }
    setView(result);
  };
  return (
    <div id="calculater-app">
      <h1>Basic Calculator</h1>
      <div className="calc-container">
        <input type="text" disabled className="calc-view" value={view} />

        <div className="calc-button">
          <button onClick={() => addToDisplay("+")}>+</button>
          <button onClick={() => addToDisplay(7)}>7</button>
          <button onClick={() => addToDisplay(8)}>8</button>
          <button onClick={() => addToDisplay(9)}>9</button>
          <button onClick={() => addToDisplay("/")}>/</button>
          <button onClick={() => addToDisplay(4)}>4</button>
          <button onClick={() => addToDisplay(5)}>5</button>
          <button onClick={() => addToDisplay(6)}>6</button>
          <button onClick={() => addToDisplay("*")}>*</button>
          <button onClick={() => addToDisplay(1)}>1</button>
          <button onClick={() => addToDisplay(2)}>2</button>
          <button onClick={() => addToDisplay(3)}>3</button>
          <button onClick={() => addToDisplay("-")}>-</button>
          <button onClick={() => addToDisplay("clear")}>C</button>
          <button onClick={() => addToDisplay(0)}>0</button>
          <button onClick={() => doCalculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
