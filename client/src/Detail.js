import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import CatNavbar from './components/CatNavbar';
import Product_Det from './components/Product_Det';
import Side from './components/Side';
import MainCont from './components/MainCont';
import { loadUser } from './actions/authActions';



import { Provider } from 'react-redux';
import store from './store';

//function App() {
class Detail extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
  return (
  <Provider store={store}>  
    <div className="Home">
      
    
    <AppNavbar/>
                          
    Detail
        <div>
          
                                             
          <Product_Det />                                 
        </div>


    </div>
    </Provider>
  );  
  }
}

export default Detail;
