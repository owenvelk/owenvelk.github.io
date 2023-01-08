import '../styles/Intro.css';
import IntroText from './IntroText';
import Image from './Image';
import profile from '../images/Profile.jpeg';

export default function Intro() {
    return (
        <div className="Intro">
            <Image source={profile} space={"50vw"} width={500} height={630}/>
            <IntroText />
        </div>
    );
}