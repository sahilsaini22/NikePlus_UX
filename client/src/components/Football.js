import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { football_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Football extends Component{
    static propTypes = {
        football_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sport } = this.props.product;
        
        const footballSelected = 
           sport === 'football'?
           
            (<Fragment>
               <NavLink onClick={this.props.football_clicked} href="#">
               <font color="Blue">
                   <strong>Football</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.football_clicked} href="#">
         <font color="Blue">
         Football
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            footballSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { football_clicked })(Football);


