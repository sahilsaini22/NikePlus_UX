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




import { Provider } from 'react-redux';
import store from './store';

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
        <Container style = {{ paddingLeft: "0mm", textAlign:"left", margin: "0%", position: "absolute" }} >
        <Ads/> 
        <Container style = {{ paddingLeft: "0mm", textAlign:"left", margin: "0%", position: "absolute" }} >
          <div>                                       
            <Popular/>                                         
          </div>  
          </Container>
        </Container>
                     
        </div>

        


    </div>
    </Provider>
  );  
  }
}

export default App;
