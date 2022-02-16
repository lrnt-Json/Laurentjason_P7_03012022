import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import Button from '@mui/material/ToggleButton';
import Paper from '@mui/material/Paper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import * as React from 'react';

const axios = require('axios').default;

var validator = require('validator');

function Main() {
    const [mail, setMail] = React.useState("");
    const [username, setUser] = React.useState("");

    const submit = () => {
        validator.isEmail(mail)

        axios({
            method: 'post',
            url: 'http://localhost:4000/api/auth/signup',
            data: {
              Mail: mail,
              Username: username,
              password: values.password
            }
          })
    }

    const [values, setValues] = React.useState({
        username: '',
        mail: '',
        password: '',
        showPassword: false
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div className='Home-Form'>
            <Paper sx={{ margin: '30px' }} elevation={3} className='Home-Paper'>
                <h2 className='Home-Form-Title'>Register</h2>

                <TextField sx={{ margin: '10px' }} className='Home-Form-Data' label="Mail" value={mail} onChange={(e) => setMail(e.target.value)}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"><MailIcon /></InputAdornment>),
                    }} variant="standard" />

                <TextField sx={{ margin: '10px' }} className='Home-Form-Data' id="user" label="Username" value={username} onChange={(e) => setUser(e.target.value)}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
                    }} variant="standard" />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    startAdornment={<InputAdornment position="start"><LockIcon /></InputAdornment>}
                    endAdornment={
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

                <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="register" onClick={submit}>Confirm</Button>
            </Paper>
        </div>
    )
}

export default Main;