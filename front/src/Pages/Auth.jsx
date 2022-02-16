import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


function Auth() {
  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon_white.png' alt='logo groupomania'/>
      <ButtonGroup exclusive>
          <Button value="Register" href='/auth/register'>Register</Button>
          <Button value="Login" href='/auth/login'>Login</Button>
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