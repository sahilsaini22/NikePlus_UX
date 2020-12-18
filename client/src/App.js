import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import CatNavbar from './components/CatNavbar';
import ProductList from './components/ProductList';
import Side from './components/Side';
import MainCont from './components/MainCont';
import { loadUser } from './actions/authActions';
import Popular from './components/Popular';
import Ads from './components/Ads';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';




import { Provider } from 'react-redux';
import store from './store';

function Routes(){
  return(
  <Switch>
          <Route path="/home" component={Home} />
          
  </Switch>
  )
}

//function App() {
class App extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
  return (

    
  <Provider store={store}>  
    <div className="App">
      
    
    <AppNavbar/>                            
        <div className="column">
        <Container  >
        <Ads/> 
        <Container style = {{ paddingLeft: "0mm", textAlign:"left", margin: "0%", position: "absolute" }} >
          
            <Popular/>                                         
          
          </Container>
        </Container>
                     
        </div>

        


    </div>
    </Provider>
  );  
  }
}

export default App;
