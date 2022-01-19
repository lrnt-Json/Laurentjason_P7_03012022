import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Auth from './Pages/Auth'
import Home from './Pages/Home'
import User from './Pages/User'

ReactDOM.render(
<React.StrictMode>
                              <Auth/>
<Router>
  <Routes>
    <Route exact path="/" component={Auth}/>
    <Route exact path="/auth" component={Home}/>
    <Route exact path="/auth/user" component={User}/>
  </Routes>
</Router>
</React.StrictMode>,document.getElementById('root')
)
