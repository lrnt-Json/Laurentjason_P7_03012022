import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Post from '../components/Profil/profil'
import axios from 'axios';

const submit = () => {
  console.log('delete')
  }

function user() {
  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon_white.png' alt='logo groupomania'/>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Post />}/>
        </Routes>
        <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" id="confirm" onClick={submit} >Supprimer le compte</Button>
      </section>
    </div>
  );
}

export default user;