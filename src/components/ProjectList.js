import { Card, CardActions, CardContent, Button, rgbToHex } from '@mui/material';
import '../styles/Projects.css';
import '../App.css';

export default function ProjectList() {
    return (
        <div className="ProjectList">
            <Card>
                <CardContent>
                    <h4>Personal Website</h4>
                    <h5 style={{color: "rgb(80, 80, 80)"}}>a.k.a. this page!</h5>
                    <p style={{color: "rgb(100,100,100)"}}>
                        This is a website I built in React, 
                        <br></br>
                        utilizing JavaScript, HTML, CSS, and 
                        <br></br>
                        the Material UI library
                    </p>
                </CardContent>
                <CardActions>
                    <a href="https://github.com/owenvelk/owenvelk.github.io" className="App-link" target="blank">
                        <Button size="large">
                            View the repository
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    );
}