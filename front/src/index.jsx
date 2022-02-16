import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Auth from './Pages/Auth'
import Home from './Pages/Home'
import User from './Pages/User'

ReactDOM.render(
<React.StrictMode>
<Router>
<Routes>
    <Route path="*" element={<Navigate to="auth/" />} />
    <Route path="auth/*" element={<Auth />}/>
    <Route path="home/*" element={<Home />}/>
    <Route path="user/*" element={<User />}/>
</Routes>
</Router>
</React.StrictMode>,document.getElementById('root')
)
