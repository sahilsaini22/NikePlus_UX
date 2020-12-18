import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { rat_dsc_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';




export class Rat_Dsc extends Component{
    static propTypes = {
        rat_dsc_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sort } = this.props.product;
        
        const ratdscSelected = 
           sort === 'rat_dsc'?
           
            (<Fragment>
               <DropdownItem onClick={this.props.rat_dsc_clicked} href="#">
               <font color="Blue">
                   <strong>Rating: High to Low</strong>                   
                </font>                   
               </DropdownItem>                       
           </Fragment> )
             
         : (<DropdownItem onClick={this.props.rat_dsc_clicked} href="#">
         <font color="Blue">
         Rating: High to Low 
          </font>                   
         </DropdownItem>                       
  )

        
        
        
            

        return(
            
             ratdscSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { rat_dsc_clicked })(Rat_Dsc);


