import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { shoes_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Shoes extends Component{
    static propTypes = {
        shoes_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const shoesSelected = 
           type === 'shoes'?
           
            (<Fragment>
               <NavLink onClick={this.props.shoes_clicked} href="#">
               <font color="Blue">
                   <strong>Shoes</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.shoes_clicked} href="#">
         <font color="Blue">
             Shoes
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
             shoesSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { shoes_clicked })(Shoes);


