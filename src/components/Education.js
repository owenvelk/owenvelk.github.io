import '../styles/Education.css';
import EducationText from './EducationText';
import Image from './Image';
import gatech from '../images/GT.jpeg';

export default function Education() {
    return (
        <div className="Education">
            <EducationText />
            <Image source={gatech} space={"50vw"} width={600} height={750}/>
        </div>
    );
}