import React from 'react';
import { useState } from 'react';
import * as math from 'mathjs';
import './style.css';
import Button from './components/Button'
import Screen from './components/Screen';

const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToScreen = (val) => {
    setText((text) => [...text, val + ""]);
  };
//function for total result after clicking equals to
  const totalResult = () => {
    const Screen = text.join("")
    setResult(math.evaluate(Screen));
  }
//function to convert any number to the opposite sign that it has before
  const plusOrminus = () => {
    const Screen  =  text * -1
    setResult(math.evaluate(Screen));
  }

  //function for "⬅" to delete the last number behind
  const backDelete = () => {
      const Screen = text.slice(0, -1)
      setResult(math.evaluate(Screen));
  }

  //function for "C" to clear value on the screen
  const clearBtn = () => {
    setText(" ")
    setResult("");
  }

  return (
    <header className="App-header">
      <div className='calcBox'>
        <Screen text = {text} result = {result} />
        <div className='row'>
          <Button sym = "C" color="red" BtnClick={clearBtn}/>
          <Button sym = "+/-" BtnClick={plusOrminus}/>
          <Button sym = "%"/>
          <Button sym = "/" BtnClick={addToScreen} />
        </div>
        <div className='row'>
          <Button sym = "7" BtnClick={addToScreen}/>
          <Button sym = "8" BtnClick={addToScreen}/>
          <Button sym = "9" BtnClick={addToScreen}/>
          <Button sym = "*" BtnClick={addToScreen}/>
        </div>
        <div className='row'>
          <Button sym = "4" BtnClick={addToScreen}/>
          <Button sym = "5" BtnClick={addToScreen}/>
          <Button sym = "6" BtnClick={addToScreen}/>
          <Button sym = "-" BtnClick={addToScreen}/>
        </div>
        <div className='row'>
          <Button sym = "1" BtnClick={addToScreen}/>
          <Button sym = "2" BtnClick={addToScreen}/>
          <Button sym = "3" BtnClick={addToScreen}/>
          <Button sym = "+" BtnClick={addToScreen}/>
        </div>
        <div className='row'>
          <Button sym = "0" BtnClick={addToScreen}/>
          <Button sym = "." BtnClick={addToScreen}/>
          <Button sym = "del" BtnClick={backDelete}/> 
          <Button sym = "=" BtnClick={totalResult}/>
        </div>
      
      </div>      
    </header>
  );
}

export default App;

