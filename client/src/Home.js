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



import { Provider } from 'react-redux';
import store from './store';

//function App() {
class Home extends Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
  return (
  <Provider store={store}>  
    <div className="Home">
      
    
    <AppNavbar/>
    <CatNavbar/>                        
        <div className="row">
          <Side/>
                                             
          <ProductList />                                 
        </div>


    </div>
    </Provider>
  );  
  }
}

export default Home;
