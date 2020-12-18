import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { tennis_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Tennis extends Component{
    static propTypes = {
        tennis_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sport } = this.props.product;
        
        const tennisSelected = 
           sport === 'tennis'?
           
            (<Fragment>
               <NavLink onClick={this.props.tennis_clicked} href="#">
               <font color="Blue">
                   <strong>Tennis</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.tennis_clicked} href="#">
         <font color="Blue">
         Tennis
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            tennisSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { tennis_clicked })(Tennis);


