import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { reset } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Reset extends Component{
    static propTypes = {
        reset: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type, sport, lowerrange, higgerrange, newi, discount } = this.props.product;
        
        const res = 
           
           
            (<Fragment>
               <NavLink onClick={this.props.reset} href="#">
               <font color="Blue">
                   Reset All Filters
                </font>
                </NavLink>
           </Fragment> )
             
            

        return(
            
             res
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { reset })(Reset);


