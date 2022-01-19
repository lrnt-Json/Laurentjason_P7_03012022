import '../styles/Home.css';

import { BrowserRouter as Router} from "react-router-dom";

function Home() {
  return (
  <Router>
    <div className="Home">
      <header className="Home-header">
        <h1>Logo</h1>
      </header>
      <section>
          <h1>Profil</h1>
      </section>
    </div>
  </Router>
  );
}

export default Home;