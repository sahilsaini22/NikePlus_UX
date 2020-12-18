import React,  { Component , Fragment } from 'react';
import {
    Collapse, 
    Navbar, 
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, 
    NavLink, 
    Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../Home";
import Router from '../index';


class AppNavbar extends Component{
    state = {
          isOpen: false
          
        }    

        static propTypes = {
            auth: PropTypes.object.isRequired
        }

    toggle = () => {
        this.setState(
            {
                isOpen: !this.state.isOpen
            }
        )
    }

    

    browse = () => {                  
            
            
            console.log('hitting')
            return  <Redirect  to="/home" />
        
     }


    render(){

        
    
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <Fragment>
            
            <NavItem>   
                <Logout/>
            </NavItem>   
        </Fragment>
    );

    const guestLinks = (
        <Fragment>            
            <NavItem>   
                <RegisterModal />
            </NavItem> 
            <NavItem>   
                <LoginModal />
            </NavItem>  
        </Fragment>
    );

    


     return(
        




        <div>
            <Navbar color="light"  dark expand="sm"  >
            
                <Container>
                    <NavbarBrand hred="/">
                    <NavLink href="http://localhost:3000/home">                    
                        <font color="orange">NikePlus</font>
                        </NavLink>
                    </NavbarBrand>
                    <NavLink href="http://localhost:3000/browse" className="ml-auto" style = {{paddingRight : "70%"}}>
                        <font color="orange">Browse Products</font>
                        </NavLink>
                    <NavbarToggler onClick={this.toggle} /> 
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { isAuthenticated ? authLinks : guestLinks }
                        </Nav>                        
                    </Collapse>
                    
                                            
                        
                </Container>
            
               
            
            </Navbar>



            
        </div>
     );     
}
}

const mapStateToProps = state => ({
 auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);