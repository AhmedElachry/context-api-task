import "./styles/App.css";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { Form } from "./Components/Form";
import { Button } from "./Components/Button";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Form />
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toggle theme
        </Button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
