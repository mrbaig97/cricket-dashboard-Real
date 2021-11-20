import axios from 'axios';
// import './App.css';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"

import Stack from '@mui/material/Stack';
import io from 'socket.io-client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Dashboard() {

    const [score, setScore] = useState({});


    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])
    console.log(setScore);

    useEffect(() => {
        const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

        socket.on('connect', function () {
            console.log("connected to server")
        });
        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });
        socket.on('SCORE', function (data) {
            console.log(data);
            setScore(data)
        });

        return () => {
            socket.close();
        };
    }, []);




    return (
        <div style={{ margin: "1rem" }}>

            <h1 id = "head"> Live Score </h1>


            <Stack spacing={2} direction="column">

                <Card id = 'score'  sx={{ maxWidth: 1000 }}>
                    <CardContent>
                        <Typography id = "title" sx={{ fontSize: 28 }} color="black" gutterBottom>
                            {score?.teamOne} vs. {score?.teamTwo}
                            <br/>
                             (bat {score.bat})
                        </Typography>
                        <Typography variant="h3" component="div">
                            {score?.score} / {score?.wicket}
                        </Typography>
                        <Typography
                        variant="h5"
                        sx={{ mb: 1.5 }} color="white">
                            over: {score?.over}
                        </Typography>
                        <Typography variant="body1">
                            comentry: <b> {score?.comentry || "Match Starts at 7:00 PST"}</b>
                        </Typography>
                    </CardContent>
                    <br/>
                    <CardContent>
                        <Typography  variant="h5" sx={{ mb: 4 }} color="dark">
                            Bowler1: {score?.bowler1}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4 }} color="dark">
                            Bowler2: {score?.bowler2}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4 }} color="dark">
                            Bowler3: {score?.bowler3}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Stack>
         


        </div>
    );
}

export default Dashboard;