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
import Shoes from './Shoes';
import Tshirt from './Tshirt';
import Pants from './Pants';
import Shorts from './Shorts';
import Jackets from './Jackets';
import Accessories from './Accessories';
import AllTypes from './AllTypes';
import Running from './Running';
import Football from './Football';
import Basketball from './Basketball';
import Tennis from './Tennis';
import AllSports  from './AllSports';
import Price_Low  from './Price_Low';
import Price_High  from './Price_High';
import Reset  from './Reset'

import Other_Filters  from './Other_Filters';

class Side extends Component{
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


    render(){
        
    
    //const { isAuthenticated, user } = this.props.auth;
/*
    const authLinks = (
        <Fragment>
            <NavItem>
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `logged-in as:  ${user.user.username} (${user.user.role})` : '' }
                    </strong>
                </span>    
            </NavItem>
            <NavItem>   
                <Logout/>
            </NavItem>   
        </Fragment>
    );

*/


     return(
         <Container style = {{paddingInline:"7%"}}>
        <div>      
            <Nav vertical>

                    <NavItem>
                        <Reset/>
                    </NavItem>

                    <NavItem>
                        <strong>Category</strong>
                    </NavItem>
                    <NavItem>
                        <AllTypes/>    
                    </NavItem>
                    <NavItem>
                        <Shoes/>    
                    </NavItem>
                    <NavItem>
                        <Tshirt/>    
                    </NavItem>
                    <NavItem>
                        <Pants/>    
                    </NavItem>
                    <NavItem>
                        <Shorts/>    
                    </NavItem>
                    <NavItem>
                        <Jackets/>    
                    </NavItem>
                    <NavItem>
                        <Accessories/>    
                    </NavItem>                                       
                

                
                <NavItem >
                    <strong>Sport</strong>
                    </NavItem>
                    <NavItem>
                        <AllSports/>    
                    </NavItem>
                    <NavItem>
                        <Running/>    
                    </NavItem>
                    <NavItem>
                        <Football/>    
                    </NavItem>
                    <NavItem>
                        <Basketball/>    
                    </NavItem>
                    <NavItem>
                        <Tennis/>    
                    </NavItem>


                    <NavItem >
                    <strong>Price Range</strong>
                    </NavItem>
                    <NavItem >
                    Min   <Price_Low/>                 
                    </NavItem>
                    <NavItem >
                    Max   <Price_High/>
                    </NavItem>
                    
                    
                    <NavItem>
                    <strong>Other Filters</strong>
                    </NavItem>
                    <NavItem >
                      <Other_Filters/>                 
                    </NavItem>
                
            </Nav>            
        </div>
        </Container>
     );     
}
}

const mapStateToProps = state => ({
 
});

export default connect(mapStateToProps, null)(Side);