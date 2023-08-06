import React, { useState } from 'react';
import './App.css';

function App() {
  const[input, setInput] = useState("0")
  const[expression, setExpression] = useState("0")



  const handleClick = (e) =>{
    if(!isNaN(e.target.name)){
      if(expression.startsWith("0")){
        setExpression(e.target.name);
        setInput(e.target.name);    
      }
      if(!expression.startsWith("0")){
        setExpression(expression.concat(e.target.name));
        setInput(input.concat(e.target.name));
      }
      if(input.startsWith('+')| input.startsWith('-') | input.startsWith('/') | input.startsWith('x')){
        setInput(e.target.name)
      }
    }else{
      setExpression(expression.concat(e.target.name))
      setInput(e.target.innerText);
    }
    var len = expression.length - 1;
    if(expression[len] === "=" && !isNaN(e.target.name)){
      setExpression(e.target.name);
      setInput(e.target.innerText);
    }

    
  }
  const handleClear = () =>{
    setExpression('0');
    setInput('0');
  }
  const handleErase = () =>{
    setExpression(expression.slice(0, -1));
    setInput(input.slice(0, -1)); 
  }
  const handleAnswer = () =>{
    const expr = document.getElementById("output"); 
    try {
      if(!expression.includes('=')){
        setExpression(expression.concat('='));
        setInput(eval(expr.innerText).toString());
      }
    } catch (error) {
      handleClear();
    }
  }
  const handleDecimal = (e) =>{
    if(!input.includes(".") && !expression.includes("=")){
      setExpression(expression.concat(e.target.name));
      setInput(input.concat(e.target.name));
    }else if(expression.includes("=")){
      setExpression(input.valueOf() + e.target.name);
      setInput(input.valueOf() + e.target.name);
    }
  }
  const handleOper = (e) =>{
    const list = ["+", "-", "*", "/"]
    var len1 = expression.length - 1
    var len2 = expression.length - 2
    if(expression[len1] !== "=" && list.indexOf(expression[len1]) === -1){
      setExpression(expression.concat(e.target.name))
      setInput(e.target.innerText)
    }
    if(expression[len1] === '='){
        setExpression(input.valueOf() + e.target.name);
        setInput(e.target.innerText)
    }
    if(isNaN(expression[len1]) && expression[len1] !== "." && e.target.name === "-" && list.indexOf(expression[len2]) === -1){
      setExpression(expression.concat(e.target.name))
      setInput(e.target.innerText)
    }else if(list.indexOf(expression[len1]) !== -1 && expression[len1] !== "=" && e.target.name !== "-" && list.indexOf(expression[len2]) === -1){
      setExpression(expression.slice(0, -1) + e.target.name)
      setInput(e.target.innerText) 
      
    }else if(isNaN(expression[len1]) && expression[len1] !== "." && expression[len1] !== "=" && list.indexOf(expression[len2] !== -1)){
      setExpression(expression.slice(0, -2) + e.target.name);
      setInput(e.target.innerText)
    }
    
    
  }
  return (
    <div>
    <div className="App">
      <div className='screen'>
        <div id='output'>{expression}</div>
        <div id='display'>{input}</div>
      </div>
      <div className='buttons'>
        <button id='clear' onClick={handleClear}>AC</button>
        <button id='backspace' onClick={handleErase}>C</button>
        <button name="/" id='divide'onClick={handleOper}>/</button>
        <button name="9" id='nine' onClick={handleClick} >9</button>
        <button name="7" id='seven' onClick={handleClick}>7</button>
        <button name="8" id='eight' onClick={handleClick}>8</button>
        <button name="*" id='multiply' onClick={handleOper}>x</button>
        <button name="6" id='six' onClick={handleClick}>6</button>
        <button name="4" id='four' onClick={handleClick}>4</button>
        <button name="5" id='five' onClick={handleClick}>5</button>
        <button name="-" id='subtract' onClick={handleOper}>-</button>
        <button name="3" id='three' onClick={handleClick}>3</button>
        <button name="1" id='one' onClick={handleClick}>1</button>
        <button name="2" id='two' onClick={handleClick}>2</button>
        <button name="+" id='add' onClick={handleOper}>+</button>
        <button name="0" id='zero' onClick={handleClick}>0</button>
        <button name="." id='decimal' onClick={handleDecimal}>.</button>
        <button id='equals'onClick={handleAnswer}>=</button>
        
      </div>
     
    </div>
    <p>Designed and coded by</p>
    <p>Rodgers Munene</p>

    </div>
  );
}

export default App;
