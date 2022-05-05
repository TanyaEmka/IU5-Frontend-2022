import React, { useState } from "react";
import "./App.css";

const Title = () => {
  return (
    <div className="todos">Todos:</div>
  );
};

const CheckBox = ({name}) => {
  return (
    <div className="point">
      <input type="checkbox"></input>
      <span>{name}</span>
    </div>
  );
};

function App() {

  const [commandArray, setArray] = useState(['Point1', 'Point2']);
  const [newCommand, setValue] = useState('');
  const [buttonValue, setButton] = useState('Add');
  const [isChange, setChange] = useState(false);
  const [index, setIndex] = useState(0);

  const forChacngeElement = (e, item) => {
      setChange(true);
      setIndex(item);
      console.log(isChange);
      setValue(commandArray[item]);
      setButton('Change');
    }

  const changeElement = (e) => {
      setArray(
        [
          ...commandArray.slice(0, index),
          newCommand === "" ? "New point" : newCommand,
          ...commandArray.slice(index + 1)
        ]
      );
      setChange(false);
      setButton('Add');
      setValue('');
      console.log(isChange);
    }

  const addCommand = (e) => {
    setArray([...commandArray, newCommand === "" ? "New point" : newCommand]);
    }

  const addValue = (e) => {
      setValue(e.target.value);
    }
  
  const update = (e) => {
      console.log(isChange);
      if (isChange === false)
        addCommand(e);
      else
        changeElement(e);
    }

  return (
    <div className="card">
      <Title />
      <div className="points">
        {commandArray.map((element, item) => {
          return (
          <div className="element" key={item}>
             <CheckBox name={element} />
             <button
              className="change_button"
              onClick={(e) => forChacngeElement(e, item)}>
                <img src="images/edit.png" alt="Линтер, ты душнила"/>
              </button>
          </div>);
        })}
      </div>
      <div className="form">
        <input type="text" value={newCommand}
          onChange={addValue}
          placeholder="New point"
          className="text"
        />
        <input type="button" value={buttonValue} onClick={update} className="button" />
      </div>
    </div>
  );
}

export default App;
