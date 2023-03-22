import './App.css';
import {useState} from 'react';
function App() {

  const [results, setResults] = useState("");

  const handleClick = (event) =>
  {
    setResults(results.concat(event.target.name));
  }
  const clear = () =>
  {
    setResults("");
  }

  const backSpace = () =>
  {
    setResults(results.slice(0, results.length-1));
  }

  const result = () =>
  {

  }

  const calculate = () =>
  {
    try{
      setResults(eval(results).toString());
    }
    catch(error)
    {
      setResults(Error)
    }
    
  }
  
  return (
    <div className="App">
       <div class="main">
      <input type="text" value = {results}/>
      <div class="btn">
         <input type="button"  id = "clear" value = 'C' onClick = {clear}/>
         <input type="button"  value = '<=' onClick = {backSpace}/>
         <input type="button"  value = 'Result' onClick = {calculate}/>
         <input type="button" name = "/" value = '/' onClick = {handleClick}/>
         <br/>
         <input type="button" name = "7" value = '7' onClick = {handleClick}/>
         <input type="button" name = "8" value = '8' onClick = {handleClick}/>
         <input type="button" name = "9" value = '9' onClick = {handleClick}/>
         <input type="button" name = "*" value = 'x' onClick = {handleClick}/>
         <br/>
         <input type="button" name = "4" value = '4' onClick = {handleClick}/>
         <input type="button" name = "5" value = '5' onClick = {handleClick}/>
         <input type="button" name = "6" value = '6' onClick = {handleClick}/>
         <input type="button" name = "-" value = '-' onClick = {handleClick}/>
         <br/>
         <input type="button" name = "1" value = '1' onClick = {handleClick}/>
         <input type="button" name = "2" value = '2' onClick = {handleClick}/>
         <input type="button" name = "3" value = '3' onClick = {handleClick}/>
         <input type="button" name = "+" value = '+' onClick = {handleClick}/>
         <br/>
         <input type="button" name = "00" value = '00'onClick = {handleClick}/>
         <input type="button" name = "0" value = '0' onClick = {handleClick}/>
         <input type="button" name = "." value = '.' onClick = {handleClick}/>
         <input type="button" name = "=" value = '=' onClick = {calculate}/>
      </div>
   </div>
 </div>
  );
}

export default App;
