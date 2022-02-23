import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


function Auth() {
var navigate = useNavigate()

  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon.svg' alt='logo groupomania'/>
      <ButtonGroup sx={{margin: '20px'}} exclusive>
          <Button sx={{color: 'white'}} value="Register"  onClick={ () => {navigate('/auth/register')}}>Register</Button>
          <Button sx={{color: 'white'}} value="Login" onClick={ () => {navigate('/auth/login')}}>Login</Button>
        </ButtonGroup>
      </header>
      <section>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </section>
    </div>
  );
}

export default Auth;