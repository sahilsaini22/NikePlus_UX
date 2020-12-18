import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { running_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Running extends Component{
    static propTypes = {
        running_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sport } = this.props.product;
        
        const runningSelected = 
           sport === 'running'?
           
            (<Fragment>
               <NavLink onClick={this.props.running_clicked} href="#">
               <font color="Blue">
                   <strong>Running</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.running_clicked} href="#">
         <font color="Blue">
            Running
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            runningSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { running_clicked })(Running);


