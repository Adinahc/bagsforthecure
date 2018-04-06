import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Details from './DetailsDiv';
import DiveInn from './DiveInnDiv';
import Home from './HomeDiv';
import LLSMission  from './LLSMissionDiv';
import Prizes from './PrizesDiv';
import Register from './RegisterDiv';
import Success from './SuccessDiv';

require('./App.css');

class App extends React.Component {
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  constructor(props) {
    super(props);  
    this.state = {
      active: {
        Fullpage: 0,
      },
    };
  }

  render() {    
    const responsiveNavBar = (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
            <NavItem href='/'>
              Home
            </NavItem>
            <NavItem href='Details'>
              Details
            </NavItem>
            <NavItem href='Prizes'>
              Prizes
            </NavItem>
            <NavItem href='LLSMission'>
              LLS Mission
            </NavItem>            
            <NavItem href='DiveInn'>
              Dive Inn
            </NavItem>
            <NavItem href="Register">
              Register
            </NavItem>
            </Nav>
          </Navbar.Collapse>
 
      </Navbar>
    ); 

    return (
      <div>
        {responsiveNavBar}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Details' component={Details}/>
          <Route path='/Prizes' component={Prizes}/>
          <Route path='/LLSMission' component={LLSMission}/>
          <Route path='/DiveInn' component={DiveInn}/>
          <Route path='/Register' component={Register}/>
          <Route path='/Success' component={Success}/>
        </Switch>           
    </div>
    );
  }
}

export default App;
