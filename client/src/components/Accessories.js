import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { accessories_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Accessories extends Component{
    static propTypes = {
        accessories_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const accessoriesSelected = 
           type === 'accessories'?
           
            (<Fragment>
               <NavLink onClick={this.props.accessories_clicked} href="#">
               <font color="Blue">
                   <strong>Accessories</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.accessories_clicked} href="#">
         <font color="Blue">
                Accessories
          </font>
          </NavLink>
     </Fragment> 
  )


        return(
            
            accessoriesSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { accessories_clicked })(Accessories);


