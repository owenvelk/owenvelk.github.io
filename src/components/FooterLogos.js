import '../styles/Footer.css';
import Logo from './Logo';
import gmail from '../images/gmail.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

export default function FooterLogos() {
    return (
        <div className='FooterLogos'>
            <Logo link={"mailto:owenvelk1002@gmail.com"} source={gmail} height={100} width={130}/>
            <Logo link={"https://www.linkedin.com/in/owenvelkoff/"} source={linkedin} height={120} width={120}/>
            <Logo link={"https://github.com/owenvelk"} source={github}  height={150} width={150}/>
        </div>
    );
}