import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { basketball_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class Basketball extends Component{
    static propTypes = {
        basketball_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sport } = this.props.product;
        
        const basketballSelected = 
           sport === 'basketball'?
           
            (<Fragment>
               <NavLink onClick={this.props.basketball_clicked} href="#">
               <font color="Blue">
                   <strong>Basketball</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.basketball_clicked} href="#">
         <font color="Blue">
         Basketball
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            basketballSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { basketball_clicked })(Basketball);


