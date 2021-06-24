import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import { Router } from 'react-router-dom'

import history from './history'

import './Theme/Styles/Styles.css'

import 'react-blended-components/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Router history={history}>
    <Routes/>
  </Router>,
  document.getElementById('root')
)
