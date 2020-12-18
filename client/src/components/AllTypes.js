import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { alltypes_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class AllTypes extends Component{
    static propTypes = {
        alltypes_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { type } = this.props.product;
        
        const alltypesSelected = 
           type === 'all'?
           
            (<Fragment>
               <NavLink onClick={this.props.alltypes_clicked} href="#">
               <font color="Blue">
                   <strong>All</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.alltypes_clicked} href="#">
         <font color="Blue">
            All
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            alltypesSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { alltypes_clicked })(AllTypes);


