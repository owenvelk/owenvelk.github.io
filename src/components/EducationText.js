import '../styles/Education.css';
import '../App.css';

export default function EducationText() {
    return (
        <div className="EducationText">
            <h3>My Education</h3>
            <p>I'm in my third year of studying Computer Science at Georgia Tech</p>
            <p>My threads (focuses) are&nbsp;
                <a className="App-link" 
                    href="https://www.cc.gatech.edu/academics/threads/intelligence"
                    target="_blank"
                >Intelligence</a> and&nbsp;
                <a className="App-link" 
                    href="https://www.cc.gatech.edu/academics/threads/information-internetworks"
                    target="_blank"
                >Information Internetworks</a>
            </p>
            <p>I've gained experience teaching as a TA for CS 1331, Georgia Tech's Intro to Object-Oriented Programming class</p>
        </div>
    );
}