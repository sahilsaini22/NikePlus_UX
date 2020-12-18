import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { rat_asc_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';




export class Rat_Asc extends Component{
    static propTypes = {
        rat_asc_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sort } = this.props.product;
        
        const ratascSelected = 
           sort === 'rat_asc'?
           
            (<Fragment>
               <DropdownItem onClick={this.props.rat_asc_clicked} href="#">
               <font color="Blue">
                   <strong>Rating: Low to High</strong>                   
                </font>                   
               </DropdownItem>                       
           </Fragment> )
             
         : (<DropdownItem onClick={this.props.rat_asc_clicked} href="#">
         <font color="Blue">
            Rating: Low to High
          </font>                   
         </DropdownItem>                       
  )

        
        
        
            

        return(
            
             ratascSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { rat_asc_clicked })(Rat_Asc);


