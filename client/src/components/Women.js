import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { women_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Women extends Component{
    static propTypes = {
        women_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { category } = this.props.product;
        
        const womenSelected = 
           category === 'women'?
           
            (<Fragment>
                
               <NavLink onClick={this.props.women_clicked} href="#"  style = {{paddingRight: "10%" , paddingLeft: "10%"}} >
               <font color="Blue">
                   <strong>Women</strong>                   
                </font>
                </NavLink>
                
           </Fragment> )
             
         : (<Fragment>
            
         <NavLink onClick={this.props.women_clicked} href="#" style = {{paddingRight: "10%", paddingLeft: "10%"}}>
         <font color="Blue">
             Women
          </font>
          </NavLink>
          
     </Fragment> 
  )
   
            

        return(
            
             womenSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { women_clicked })(Women);