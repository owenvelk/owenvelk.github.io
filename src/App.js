import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Intro />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
