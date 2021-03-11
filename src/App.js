import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contacts from './Components/Contacts.js';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App" style={{minHeight: '100vh'}}>
        <Navigationbar />

        <Container fluid="md" className="content vh-100">
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/contacts">
                <Contacts />
              </Route>

            </Switch>
          </Container>
      </div>
    </Router>
  );
}

export default App;
