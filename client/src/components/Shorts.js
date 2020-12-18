import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { shorts_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Shorts extends Component{
    static propTypes = {
        shorts_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const shortsSelected = 
           type === 'shorts'?
           
            (<Fragment>
               <NavLink onClick={this.props.shorts_clicked} href="#">
               <font color="Blue">
                   <strong>Shorts</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.shorts_clicked} href="#">
         <font color="Blue">
             Shorts
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
             shortsSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { shorts_clicked })(Shorts);


