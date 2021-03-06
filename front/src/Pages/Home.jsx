import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import * as React from 'react';
import { BrowserRouter as useNavigate, Route, Routes} from "react-router-dom";

import Post from '../components/Home/post'
import OnePost from '../components/Home/onepost'
import AddPost from '../components/Home/addpost'
import AddFeedback from '../components/Home/addfeedback'

function Auth() {

const Logout = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

  return (
    <div className="Home">
      <header className="Home-header"><img className='logo' src='/icon.svg' alt='logo groupomania'/>
        <ButtonGroup sx={{margin: '20px'}} exclusive>
          <Button sx={{color: 'white'}} value="profil" href={'/user'}>Profil</Button>
          <Button sx={{color: 'white'}} value="logout" href={'/'} onClick={Logout}>Se déconnecter</Button>
        </ButtonGroup>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Post />}/>
          <Route path="/post/*" element={<OnePost />}/>
          <Route path="/addpost" element={<AddPost />}/>
          <Route path="/post/feedback" element={<AddFeedback />}/>
        </Routes>
      </section>
    </div>
  );
}

export default Auth;