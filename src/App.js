import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Intro />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
