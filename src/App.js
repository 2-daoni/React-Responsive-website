import { Link } from 'react-router-dom';
import './App.css';
import Profile from './Container/Home/Profile.js';
import Skills from './Container/Skills/Skills';

function App() {
  return (
    <div className="portfolio">
      <div className="profile">
        <Profile />
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
