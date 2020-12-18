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
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Sorting from './Sorting';
import LoginModal from './auth/LoginModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class CatNavbar extends Component{
    state = {
          isOpen: false,
          category: ''
        }    

        static propTypes = {
            auth: PropTypes.object.isRequired,
            category: PropTypes.object.isRequired
            
        }

    toggle = () => {
        this.setState(
            {
                isOpen: !this.state.isOpen
            }
        )
    }


    render(){

     return(
         <div style = {{backgroundColor: "#0dcaf0"}}>
         <Container  style = {{backgroundColor: "#0dcaf0", paddingTop:"0mm", marginLeft : "5%", marginTop:"0%" ,float: "none", position: "top", width:"100%" }}>
        <div>
            <Navbar  >
                <Men/>
                <Women/>
                <Kids/>
                <Sorting/>
            </Navbar>
        </div>
        </Container>
        </div>
     );     
}
}



const mapStateToProps = state => ({
 category: state.auth
});

export default connect(mapStateToProps, null)(CatNavbar);