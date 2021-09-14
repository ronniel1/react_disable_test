import { useToggle } from "react-use";
import { IconButton, TextField, Collapse } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import "./App.css";

function App() {
  const [isDisabled, toggleIsDisabled] = useToggle(false);
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <div className="App">
      <button onClick={toggleIsDisabled}>
        {isDisabled ? "enable" : "disable"}
      </button>
      <fieldset disabled={isDisabled}>
        <label>{isDisabled ? "fields disabled" : "Fields enabled"}</label>
        <TextField label="field1" />
        <div>
          <IconButton disabled={isDisabled} onClick={toggleIsOpen}>
            <ExpandMore className={isOpen ? "rotate" : ""} />
          </IconButton>
          <Collapse in={isOpen}>
            <p>111</p>
            <p>222</p>
          </Collapse>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
