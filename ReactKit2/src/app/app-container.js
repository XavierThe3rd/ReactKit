import { connect } from 'react-redux'
import { setExample } from '../redux/actions/example'
import App from './App.jsx'

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = {
  setExample: setExample
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
