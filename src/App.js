import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState("");
  const [dark, setDark] = useState(true);

  const slowFunction = (number) => {
    console.log("double ");
    const num = Number(number);
    for (let i = 0; i < 10000000; i++) {}
    return num * 3;
  };
  const changeTheme = () => {
    // console.log("theme changed");
    setDark((theme) => !theme);
  };
  const themeStyles = useMemo(
    () => ({
      padding: "1rem",
      backgroundColor: dark ? "black" : "white"
    }),
    [dark]
  );
  useEffect(() => {
    console.log("change theme");
  }, [themeStyles]);

  const res = useMemo(() => slowFunction(output), [output]);
  console.log(res);
  return (
    <div className="App">
      <input
        value={output}
        onChange={(e) => {
          setOutput(e.target.value);
        }}
      />
      <div style={themeStyles}>
        <button onClick={changeTheme}>Change theme</button>
      </div>
      <div>{res}</div>
    </div>
  );
}
