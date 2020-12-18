import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { pri_asc_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';




export class Pri_Asc extends Component{
    static propTypes = {
        pri_asc_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sort } = this.props.product;
        
        const priascSelected = 
           sort === 'pri_asc'?
           
            (<Fragment>
               <DropdownItem onClick={this.props.pri_asc_clicked} href="#">
               <font color="Blue">
                   <strong>Price: Low to High</strong>                   
                </font>                   
               </DropdownItem>                       
           </Fragment> )
             
         : (<DropdownItem onClick={this.props.pri_asc_clicked} href="#">
         <font color="Blue">
             Price: Low to High
          </font>                   
         </DropdownItem>                       
  )

        
        
        
            

        return(
            
             priascSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { pri_asc_clicked })(Pri_Asc);


