import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

function Home() {
  return (
  <Router>
    <div className="Home">
      <header className="Home-header"><h1>Logo</h1>
        <ButtonGroup color="primary" exclusive>
          <Button value="Register" href='/register'>Register</Button>
          <Button value="Login" href='/login'>Login</Button>
        </ButtonGroup>
      </header>
      <section>                                       <Register/>
        <Routes>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Routes>
      </section>
    </div>
  </Router>
  );
}

export default Home;