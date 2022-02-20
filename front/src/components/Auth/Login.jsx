import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'

import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;


function Login() {
  const navigate = useNavigate()
  const [username, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submit = () => {

  axios({
      method: 'post',
      url: 'http://localhost:4000/api/auth/login',
      data: {
        Username: username,
        password: password,
      }
    })
    .then(function (response) {
      const d = new Date()
      d.setTime(d.getTime() + (24*60*60*1000))
      document.cookie = "token=" +response.data['token'] + ";expires="+ d.toUTCString() + "; path=/";
      navigate('/home')
  })

}


          return (
              <div className='Home-Form'>
                <Paper sx={{margin:'20px'}} elevation={3} className='Form-Paper'>
                <h2 className='Home-Form-Title'>Login</h2>

                  <TextField sx={{margin:'10px'}} className='Home-Form-Data' id="input-with-icon-textfield" label="Username" onChange={(e) => setUser(e.target.value)}
                  InputProps={{
                      startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
                    }}variant="standard"/>

                  <TextField sx={{margin:'10px'}} className='Home-Form-Data' id="input-with-icon-textfield" label="Password" onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                      startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),
                    }}variant="standard"/>

                  <Button value="Confirm" sx={{margin:'10px'}} onClick={submit} >Login</Button>
                </Paper>
              </div>
          )
      }

export default Login;