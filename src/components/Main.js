import React from "react"
import axios from "axios"
import {
  Route,
  Link,
  HashRouter as Router,
  Switch
} from "react-router-dom"
import Testes from "./testes"
class Main extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Route exact path="/" component={Testes}></Route>
        </Router>
      </div>
    )
  }
}
export default Main
