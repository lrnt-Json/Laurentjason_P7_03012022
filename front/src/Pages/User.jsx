import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Post from '../components/Profil/profile'


function Auth() {
  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon_white.png' alt='logo groupomania'/>
      </header>
      <section>
        <Routes>
          <Route path="/login" element={<Post />}/>
        </Routes>
      </section>
    </div>
  );
}

export default Auth;