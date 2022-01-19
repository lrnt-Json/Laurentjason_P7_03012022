import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'

import Button from '@mui/material/ToggleButton';

function Login() {
          return (
              <div>
                <h2 className='Home-Form-Title'>Login</h2>
                <div className='Home-Form'>
                  <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Username"
                  InputProps={{
                      startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
                    }}variant="standard"/>
                  <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Password"
                  InputProps={{
                      startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),
                    }}variant="standard"/>
                </div>
                <Button value="Confirm">Login</Button>
              </div>
          )
      }

export default Login;