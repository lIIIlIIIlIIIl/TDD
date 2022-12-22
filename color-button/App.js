import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = colorName => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

const App = () => {
  const [buttonColor, setButtonColor] = useState("red");
  const [secButtonColor, setSecButtonColor] = useState("MediumVioletRed");
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const disableButtonColor = isChecked ? "gray" : buttonColor;

  const newSecButtonColor =
    secButtonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const secButtonText = replaceCamelWithSpaces(newSecButtonColor);
  const disableBtnBackgroundColor = isChecked ? "gray" : secButtonColor;

  return (
    <div>
      <button
        style={{ backgroundColor: disableButtonColor, color: "white" }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <button
        style={{ backgroundColor: disableBtnBackgroundColor, color: "white" }}
        onClick={() => setSecButtonColor(newSecButtonColor)}
        disabled={isChecked}
      >
        Change to {secButtonText}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
    </div>
  );
};

export default App;
