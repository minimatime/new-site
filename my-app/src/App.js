import './App.css';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <p className="pages">Play</p>
        <p className="pages">Studio</p>
        <p className="pages">About</p>
      </div>
      <div className="homepage-header">
        <h1>
          Natasha is using the computer to bring delight into the world. Her work features a blend of interaction, motion and identity design. Currently crafting at Georgia Tech.
        </h1>
      </div>

      <div className="homepage-body">
        <CaseStudy
          heading="Redesigning Checkout"
          subheading="How we reduced drop-off by 40% in 3 months."
          videoSrc="/videos/georgiaAquarium.mp4"
        />
      </div>
    </div>
  );
}

export default App;
