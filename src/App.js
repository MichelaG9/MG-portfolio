import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js';
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

            </Switch>
          </Container>
      </div>
    </Router>
  );
}

export default App;
