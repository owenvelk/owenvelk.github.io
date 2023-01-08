export default function Image(props) {
    return (
        <div style={{width: props.space}}> 
            <img src={props.source} alt='image' style={{
                width: props.width,
                height: props.height
            }}></img>
        </div>
    );
}