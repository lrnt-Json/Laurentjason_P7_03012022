import '../styles/Home.css';

import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Post from '../components/Home/post'
import OnePost from '../components/Home/onepost'
import AddPost from '../components/Home/addpost'

function Auth() {
  return (
    <div className="Home">
      <header className="Home-header"><img src='/icon_white.png' alt='logo groupomania'/>
      <ButtonGroup exclusive>
          <Button value="addpost" href='/user'>Profil</Button>
        </ButtonGroup>
      </header>
      <section>
        <Routes>
          <Route path="/Home" element={<Post />}/>
          <Route path="/Home/post" element={<OnePost />}/>
          <Route path="/Home/addpost" element={<AddPost />}/>
        </Routes>
      </section>
    </div>
  );
}

export default Auth;