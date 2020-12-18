import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';



export class Logout extends Component{
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render(){
        return(
           <Fragment>
               <NavLink onClick={this.props.logout} href="#" style = {{paddingLeft : "0%" , paddingRight : "0%"}}>
               <font color="orange">Logout</font>
                </NavLink>
           </Fragment>    
        )
    }
}

export default connect(null, { logout })(Logout);
