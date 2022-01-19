import '../styles/Home.css';

import { BrowserRouter as Router} from "react-router-dom";

import Button from '@mui/material/Button';

function Home() {
  return (
  <Router>
    <div className="Home">
      <header className="Home-header">
        <h1>Logo</h1>
        <Button value="Profil">Profil</Button>
      </header>
      <section></section>
    </div>
  </Router>
  );
}

export default Home;