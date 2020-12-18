import React, { Component, Fragment } from 'react';
import {NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { allsports_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';



export class AllSports extends Component{
    static propTypes = {
        allsports: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sport } = this.props.product;
        
        const allsportsSelected = 
           sport === 'all'?
           
            (<Fragment>
               <NavLink onClick={this.props.allsportsl_clicked} href="#">
               <font color="Blue">
                   <strong>All</strong>                   
                </font>
                </NavLink>
           </Fragment> )
             
         : (<Fragment>
         <NavLink onClick={this.props.allsports_clicked} href="#">
         <font color="Blue">
         All
          </font>
          </NavLink>
     </Fragment> 
  )

        
        
        
            

        return(
            
            allsportsSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { allsports_clicked })(AllSports);


