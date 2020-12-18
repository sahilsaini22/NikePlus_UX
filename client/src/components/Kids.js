import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { kids_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Kids extends Component{
    static propTypes = {
        kids_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { category } = this.props.product;
        
        const kidsSelected = 
           category === 'kids'?
           
            (<Fragment>
                
               <NavLink onClick={this.props.kids_clicked} href="#" style={{ paddingRight :"10%"}}>
               <font color="Blue">
                   <strong>Kids</strong>                   
                </font>
                </NavLink>
                
           </Fragment> )
             
         : (<Fragment>
            
         <NavLink onClick={this.props.kids_clicked} href="#" style={{  paddingRight :"10%"}}>
         <font color="Blue">
             Kids
          </font>
          </NavLink>
         
     </Fragment> 
  )
   
            

        return(
            
             kidsSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { kids_clicked })(Kids);