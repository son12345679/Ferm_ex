import React, {Component} from "react";
import DishDetail from "./components/DishDetailComponent.js";
import { DISHES } from './shared/dishes.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <div className="App">
        .row-header{
    margin:0px auto;
    padding:0px auto;
}

<Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

.row-content {
    margin:0px auto;
    padding: 50px 0px 50px 0px;
    border-bottom: 1px ridge;
    min-height:400px;
}

.footer{
    background-color: #D1C4E9;
    margin:0px auto;
    padding: 20px 0px 20px 0px;
}
.jumbotron {
    padding:70px 30px 70px 30px;
    margin:0px auto;
    background: #9575CD ;
    color:floralwhite;
}

address{
    font-size:80%;
    margin:0px;
    color:#0f0f0f;
}

.navbar-dark {
    background-color: #512DA8;
}
<BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>


        <Main />
        
      </div>
      
    );
    
  }
  
}



export default App;
