import '../styles/Experience.css';
import '../App.css';

export default function ExperienceText() {
    return (
        <div className="ExperienceText">
            <h3>My Experience</h3>
            <p>I've gained software engineering experience through internships at both large and small companies</p>
            <p>I've worked on both front-end and back-end projects at&nbsp;
                <a className="App-link" 
                    href="https://www.ncr.com/"
                    target="_blank"
                >NCR Corporation</a>
                , a Fortune 500 company in Atlanta
            </p>
            <p>I've also developed full-stack web application features at&nbsp;
                <a className="App-link" 
                    href="https://verticeanalytics.ai/"
                    target="_blank"
                >Vertice AI</a>
                , a small startup
            </p>
        </div>
    );
}