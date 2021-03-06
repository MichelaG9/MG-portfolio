import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar/>

        <Container fluid >
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
                <Contact />
              </Route>

            </Switch>
          </Container>
      </div>
    </Router>
  );
}

export default App;
