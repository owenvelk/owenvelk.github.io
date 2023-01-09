export default function Logo(props) {
    return (
        <div style={{width: "25vw"}}> 
            <a href={props.link} target="_blank">
                <img src={props.source} alt='image' style={{
                    width: props.width,
                    height: props.height
                }}></img>
            </a>
        </div>
    );
}