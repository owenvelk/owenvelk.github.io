import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
