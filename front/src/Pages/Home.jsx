import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import * as React from 'react';
import { BrowserRouter as useNavigate, Route, Routes} from "react-router-dom";

import Post from '../components/Home/post'
import OnePost from '../components/Home/onepost'
import AddPost from '../components/Home/addpost'

const Logout = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function Auth() {
  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon_white.png' alt='logo groupomania'/>
      <ButtonGroup exclusive>
          <Button value="profil" href={'/user'}>Profil</Button>
          <Button value="logout" href={'/'} onClick={Logout}>Se déconnecter</Button>
        </ButtonGroup>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Post />}/>
          <Route path="/post" element={<OnePost />}/>
          <Route path="/addpost" element={<AddPost />}/>
        </Routes>
      </section>
    </div>
  );
}

export default Auth;