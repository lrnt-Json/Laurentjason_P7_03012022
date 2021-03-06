import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Profil from '../components/Profil/profil'
import axios from 'axios';

function user() {

let token = decodeURIComponent(document.cookie)

const Logout = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const submit = () => {
  console.log('delete')
  axios({
    method : 'delete',
    url : 'http://localhost:4000/api/profil',
    headers: {
     'Authorization': `Basic ${token}`
   }})
  }

  return (
    <div className="Home">
      <header className="Home-header"><img className='logo' src='/icon.svg' alt='logo groupomania'/>
        <ButtonGroup sx={{margin: '20px',color: 'white'}} exclusive>
          <Button sx={{color: 'white'}} value="post" href={'/home'}>Tout les posts</Button>
          <Button sx={{color: 'white'}} value="logout" href={'/'} onClick={Logout}>Se déconnecter</Button>
        </ButtonGroup>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Profil />}/>
        </Routes>
        <Button sx={{ margin: '10px 0 20px 0' }} value="Confirm" href="/" id="confirm" onClick={submit} >Supprimer le compte</Button>
      </section>
    </div>
  );
}

export default user;