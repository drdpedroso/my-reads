import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import {getAllBooks} from './services/api'
import Shelf from './containers/Shelf'
import Search from './containers/Search'
import styled from 'styled-components'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Shelf</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Shelf} />
          <Route path='/search' component={Search} />
        </div>
      </Router>
    )
  }
}

export default App
