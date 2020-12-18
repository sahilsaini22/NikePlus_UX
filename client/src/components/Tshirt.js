import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { tshirt_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Tshirt extends Component{
    static propTypes = {
        tshirt_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const tshirtSelected = 
           type === 'tshirt'?
           
            (<Fragment>
               <NavLink onClick={this.props.tshirt_clicked} href="#">
               <font color="Blue">
                   <strong>T-Shirt</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.tshirt_clicked} href="#">
         <font color="Blue">
                T-Shirt
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
             tshirtSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { tshirt_clicked })(Tshirt);


