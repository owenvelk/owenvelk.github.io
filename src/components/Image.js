import '../styles/Image.css';

export default function Image(props) {
    return (
        <div className="Image"> 
            <img src={props.source} alt='image' style={{
                width: props.width,
                height: props.height
            }}></img>
        </div>
    );
}