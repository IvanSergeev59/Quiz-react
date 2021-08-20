import React, { Component } from 'react'
import './App.scss'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

export const ClickedContext = React.createContext(false)

class App extends Component {
  render() {
    return (
  
      <Layout>
        <Quiz>
          
        </Quiz>
      </Layout>
    )
  }
}
  

export default App
