import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import Dashboard from "./components/dashboard/index"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Scoreboard from "./components/scoreboard/index"


function App() {
  let history = useHistory();

  return (
    <>
    <div id = "body">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://book.giflingua.com/images/origin/cricket-elements-82743.gif"
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className = "link" onClick={() => { history.push("/") }}>Scoreboard</Nav.Link>
              <Nav.Link className = "link" onClick={() => { history.push("/admin") }}>Dashboard</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

      <Switch>
        <Route exact path="/" component={Scoreboard} />
        <Route path="/admin" component={Dashboard} />

        <Redirect to="/" />
      </Switch>
      </div>
    </>
  );
}

export default App;
