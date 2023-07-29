import '../styles/Experience.css';
import ExperienceText from './ExperienceText';
import Image from './Image';
import ncr from '../images/ncr.png';
import vertice from '../images/vertice.png';

export default function Experience() {
    return (
        <div className="Experience">
            <div className="ExperienceLogos">
                <div className="ncr">
                    <Image source={ncr} space={"50vw"} width={400} height={130}/>
                </div>
                <div className="vertice">
                    <Image source={vertice} space={"50vw"} width={400} height={130}/>
                </div>
            </div>
            <ExperienceText />
        </div>
    );
}