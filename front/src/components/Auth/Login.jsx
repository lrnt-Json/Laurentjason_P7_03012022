import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

var validator = require('validator');

function Login() {
  const navigate = useNavigate()
  const [username, setUser] = React.useState("");
  const [error, setError] = React.useState("");
  const submit = () => {
  if (validator.isEmpty(username) === true){
    setError("Le nom d'utilisateur est vide")
  }else if (validator.isEmpty(values.password) === true){
    setError("Le mot de passe est vide")
  }else{
  axios({
      method: 'post',
      url: 'http://localhost:4000/api/auth/login',
      data: {
        Username: username,
        password: values.password,
      }
    })
    .then(function (response) {
      const d = new Date()
      d.setTime(d.getTime() + (24*60*60*1000))
      document.cookie = "token=" +response.data['token'] + ";expires="+ d.toUTCString() + "; path=/";
      window.setTimeout(function () {navigate('/home')},200);
  }).catch(function (error) {
      console.error(error)
      setError("Donnée incorrect, vérifier que les informations entrée soit valide.")
  })}

}
const [values, setValues] = React.useState({
  password: '',
  showPassword: false
});

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className='Home-Form'>
    <Paper sx={{margin:'20px'}} elevation={3} className='Form-Paper'>
    <h2 className='Home-Form-Title'>Login</h2>

    <TextField sx={{margin:'10px'}} className='Home-Form-Data' id="input-with-icon-textfield" label="Username" onChange={(e) => setUser(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start"><AccountCircle /></InputAdornment>
        ),
      }}variant="standard"/>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input id="standard-adornment-password" type={values.showPassword ? 'text' : 'password'}
            value={values.password} onChange={handleChange('password')}
            startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}/>
      </FormControl>
        <Button value="Confirm" sx={{margin:'10px'}} onClick={submit} >Login</Button>
        <p className='error'>{error}</p>
      </Paper>
    </div>
          )
      }

export default Login;