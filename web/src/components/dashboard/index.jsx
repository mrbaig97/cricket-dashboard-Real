import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import io from 'socket.io-client';
import { height } from '@mui/system';

function Scoreboard() {
    const [score, setScore] = useState({
        teamOne: "",
        teamTwo: "",
        bat: "",
        score: "",
        wicket: "",
        over: "",
        bowler1: "",
        bowler2: "",
        bowler3: ""
    });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

    const submit = () => {
        axios.post(`${baseUrl}/api/v1/score`, score)
            .then((res) => {
                console.log("res: ", res.data);
            })
    }

    return (
        <div id = "main1">
        <div style={{ margin: "1rem" }}>

            <h1> Admin Control  </h1>

            <Box className = "dash"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                className = "dash"
                    label="Team 1"
                    variant="standard"
                    value={score.teamOne}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamOne: e.target.value }
                        })
                    }}
                    placeholder="enter team one name"
                />

                <TextField
                className = "dash"
                    label="Team 2"
                    variant="standard"
                    value={score.teamTwo}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, teamTwo: e.target.value }
                        })
                    }}
                    placeholder="enter team two name"
                /> <br />
                <TextField
                className = "dash"
                    label="Bating team"
                    variant="standard"
                    value={score.bat}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bat: e.target.value }
                        })
                    }}
                    placeholder="who is batting"
                /> <br />
                <TextField
                className = "dash"
                    label="runs/score"
                    variant="standard"
                    type="number"
                    value={score.score}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, score: e.target.value }
                        })
                    }}
                    placeholder="What's the score"
                /> <br />
                  <TextField
                  className = "dash"
                    label="Bowler1"
                    variant="standard"
                    type="text"
                    value={score.bowler1}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bowler1: e.target.value }
                        })
                    }}
                    placeholder="bowler's name"
                /><br/>
                   <TextField
                   className = "dash"
                    label="Bowler2"
                    variant="standard"
                    type="text"
                    value={score.bowler2}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bowler2: e.target.value }
                        })
                    }}
                    placeholder="bowler's name"
                /><br/>
                   <TextField
                   className = "dash"
                    label="Bowler3"
                    variant="standard"
                    type="text"
                    value={score.bowler3}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, bowler3: e.target.value }
                        })
                    }}
                    placeholder="bowler's name"
                /><br/>
                <TextField
                className = "dash"
                    label="wicket"
                    variant="standard"
                    type="number"
                    value={score.wicket}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, wicket: e.target.value }
                        })
                    }}
                    placeholder="how many wickets"
                /> <br />
                <TextField
                className = "dash"
                    label="over"
                    variant="standard"
                    type="number"
                    value={score.over}
                    onChange={(e) => {
                        setScore((prev) => {
                            return { ...prev, over: e.target.value }
                        })
                    }}
                    placeholder="how many overs"
                /> <br />
                <Button variant="contained" color = "success" onClick={submit}>Update Score</Button>

            </Box>
            <div>
      <FormControl sx={{ m: 2, minWidth: 200}}>
        <InputLabel htmlFor="grouped-native-select">Select Team One</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Select Team One">
          <option aria-label="None" value="" />
            <option value={1}>Australia</option>
            <option value={2}>New Zealand</option>
            <option value={3}>India</option>
            <option value={4}>Pakistan</option>
            <option value={5}>England</option>
            <option value={6}>West Indies</option>
            <option value={7}>Bangladesh</option>
            <option value={8}>Soth Africa</option>
            <option value={9}>Srilanka</option>
            <option value={10}>Afghanistan</option>
          </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 200}}>
        <InputLabel htmlFor="grouped-native-select">Select Team Two</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Select Team One">
          <option aria-label="None" value="" />
            <option value={1}>Australia</option>
            <option value={2}>New Zealand</option>
            <option value={3}>India</option>
            <option value={4}>Pakistan</option>
            <option value={5}>England</option>
            <option value={6}>West Indies</option>
            <option value={7}>Bangladesh</option>
            <option value={8}>Soth Africa</option>
            <option value={9}>Srilanka</option>
            <option value={10}>Afghanistan</option>
          </Select>
      </FormControl>
    </div>

        </div>
        </div>
    );
}

export default Scoreboard;