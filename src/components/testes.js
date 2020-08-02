import React, {useState, useEffect} from "react"
import axios from "axios"
import $ from "jquery"
function Testes(props) {
  const [text, setText] = useState([])
  const [currentLetter, setCurrentLetter] = useState(0);
  const [lastLetter, setLastLetter] = useState(0)
  useEffect(() => {
    axios.get("https://loripsum.net/api/1/medium/plaintext").then(res => {
      console.log(res)
      setText(res.data.split(""))
      setLastLetter(res.data.length -1)
    })
    // let x = "Testing text testing"
    // setText(x.split(""))
  }, [])
  useEffect(() => {
    setLastLetter(text.length)
  }, [text])
  return(
    <div>
      <h1> Hello World </h1>
      <div>
      <Display text={text} props={props}/>
      <h2 id="finish"></h2>
      </div>
      <input id="inputBox" type="text" onChange = {(event) => {
        if(event.target.value === text[currentLetter]) {
          $(`#${currentLetter}`).css("color","red")
          $(`#${currentLetter}`).css("text-decoration","underline")
          setCurrentLetter(currentLetter + 1)
          $("#inputBox").val("")
        }
      }}></input>
      {currentLetter === lastLetter && currentLetter !== 0 && <div>Congrats You were first in a race with 1 person how do you feel</div>}
    </div>
  )
}
export default Testes
const Display = (props) => {
  let letterDisplay;
  letterDisplay = $(props.text).map((x, y) => (
    <span id={x}>{y}</span>
  ))
  return(
    <div id="text">
      {letterDisplay}
    </div>
  );
}
