import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css' // import this from node_modules before other styles which override some bootstrap css
import 'font-awesome/css/font-awesome.min.css'
import './index.css' // NOTE import this after bootstrap to override font
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'))
registerServiceWorker()
