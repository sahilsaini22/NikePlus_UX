import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { jackets_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Jackets extends Component{
    static propTypes = {
        jackets_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const jacketsSelected = 
           type === 'jackets'?
           
            (<Fragment>
               <NavLink onClick={this.props.jackets_clicked} href="#">
               <font color="Blue">
                   <strong>Jackets</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.jackets_clicked} href="#">
         <font color="Blue">
                Jackets
          </font>
          </NavLink>
     </Fragment> 
  )


        return(
            
            jacketsSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { jackets_clicked })(Jackets);


