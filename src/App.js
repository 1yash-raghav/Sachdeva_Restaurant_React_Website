import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponent';
import {DISHES} from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render(){
    return (
      <div className="App">
      <Navbar dark color="warning">
        <div className="container">
          <NavbarBrand href="./">Sachdeva</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
