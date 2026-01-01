import Header from './components/Header';
import './styles/App.css';
import lukasPhoto from './assets/lukas.png';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="app-main">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="welcome-title">
              Welcome to my portfolio!
            </h1>
            <p className="welcome-subtitle">
              Junior Full Stack Developer ready to build amazing things
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                See My Projects
              </button>
              <button className="btn-secondary">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={lukasPhoto} alt="Lukas Sperandio" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;