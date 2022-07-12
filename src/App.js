import React, {Component} from "react";
import DishDetail from "./components/DishDetailComponent.js";
import { DISHES } from './shared/dishes.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
}
<Menu dishes={this.state.dishes} />


export default App;
