import { useState, useRef, useEffect } from 'react';
import './App.css';
import CaseStudy from './components/CaseStudy';

const caseStudies = [
  {
    heading: "Georgia Aquarium",
    subheading: "How we reduced drop-off by 40% in 3 months.",
    videoSrc: "/videos/georgiaAquarium.mp4",
    bgColor: "#84CAFF", // blue
  },
  {
    heading: "MyPocket",
    subheading: "How we reduced drop-off by 40% in 3 months.",
    videoSrc: "/videos/mypocket-vid.mp4",
    bgColor: "#D4E157", // green
  },
  {
    heading: "Children's Museum of Atlanta",
    subheading: "How we reduced drop-off by 40% in 3 months.",
    videoSrc: "/videos/cma-vid-poster.mp4",
    bgColor: "#FFD117", // yellow
  },
];

function App() {
  const [activeBg, setActiveBg] = useState(caseStudies[0].bgColor);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveBg(caseStudies[index].bgColor);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeBg }}>
      

      <div className="homepage-header" style={{ backgroundColor: activeBg }}>
        <div className="text=header">
        <h3>
          Natasha is using the computer to bring delight into the world.</h3>
          <p id="caps">Her work features a blend of interaction, motion and identity design. Currently crafting at Georgia Tech.</p>
        </div>
        <div className="nav-menu">
    <button className="nav-menu__trigger" aria-label="Open menu">
      <span className="nav-menu__dot" />
    </button>
    <div className="nav-menu__dropdown">
      <p className="nav-menu__item">Work</p>
      <p className="nav-menu__item">Studio</p>
      <p className="nav-menu__item">Play</p>
    </div>
  </div>
      </div>

      <div className="homepage-body">
        {caseStudies.map((cs, index) => (
          <div key={cs.heading} ref={(el) => (sectionRefs.current[index] = el)} data-index={index}>
            <CaseStudy heading={cs.heading} subheading={cs.subheading} videoSrc={cs.videoSrc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;