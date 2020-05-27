import React from 'react'
import exampleIcon from '../../images/ReactIcon.svg'
import SVG from 'react-inlinesvg'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles.css'

let block = 'app'

const App = props => {
  let { setExample, example } = props

  return (
    <div className={block}>
      <h1 className={`${block}_heading`}>ReactKit</h1>
      <SVG className={`${block}_svg`} src={exampleIcon} />
    </div>
    /*<Router>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </Router>*/
  )
}
export default App
