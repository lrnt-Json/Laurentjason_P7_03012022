import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'

import Button from '@mui/material/ToggleButton';

function Register() {
          return (
            <div>
                <h2 className='Home-Form-Title'>Register</h2>
                <div className='Home-Form'>
                <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Email"
                    InputProps={{
                    startAdornment: (<InputAdornment position="start"><MailIcon /></InputAdornment>),
                    }}variant="standard"/>
                <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Username"
                    InputProps={{
                    startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>),
                    }}variant="standard"/>
                <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Password"
                    InputProps={{
                    startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),
                    }}variant="standard"/>
                <TextField className='Home-Form-Data' id="input-with-icon-textfield" label="Confirm Password"
                    InputProps={{
                    startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>),
                    }}variant="standard"/>
                </div>
                <Button value="Confirm">Confirm</Button>
          </div>
          )
      }

export default Register;