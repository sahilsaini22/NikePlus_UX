import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { men_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Men extends Component{
    static propTypes = {
        men_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { category } = this.props.product;
        
        const menSelected = 
           category === 'men'?
           
            (<Fragment>
                
               <NavLink onClick={this.props.men_clicked} href="#" style={{ paddingLeft :"21%"}}>
               <font color="Blue">
                   <strong>Men</strong>                   
                </font>
                </NavLink>
                
           </Fragment> )
             
         : (<Fragment>
            
         <NavLink onClick={this.props.men_clicked} href="#" style={{ paddingLeft :"21%"}}>
         <font color="Blue">
             Men
          </font>
          </NavLink>
          
     </Fragment> 
  )

        
        
        
            

        return(
            
             menSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { men_clicked })(Men);


