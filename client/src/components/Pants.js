import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { pants_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Pants extends Component{
    static propTypes = {
        pants_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const pantsSelected = 
           type === 'pants'?
           
            (<Fragment>
               <NavLink onClick={this.props.pants_clicked} href="#">
               <font color="Blue">
                   <strong>Pants</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.pants_clicked} href="#">
         <font color="Blue">
                Pants
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
             pantsSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { pants_clicked })(Pants);


