import { Music1 } from '../Music/Music1';
import { Navbar } from '../navbar/Navbar';
import { Weather } from '../Weather/Weather';
import { Route, Switch } from 'react-router';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './App.css';





function App() {
  return (
    <div >
        <div>
          <Navbar/>
        </div>
          
            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1050}
                  classNames="fade"
                >
                <Switch location={location}>
                  <Route exact path='/' component={Music1} />
                  <Route exact path='/Weather' component={Weather} />     
                </Switch>
                </CSSTransition>
              </TransitionGroup>
              )} />
    </div>
  );
}

export default App;
