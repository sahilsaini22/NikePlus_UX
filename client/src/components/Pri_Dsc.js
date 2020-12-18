import React, { Component, Fragment } from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { pri_dsc_clicked } from '../actions/productActions';
import PropTypes from 'prop-types';




export class Pri_Dsc extends Component{
    static propTypes = {
        pri_dsc_clicked: PropTypes.func.isRequired
     
        
    }
    render(){

        
        const { sort } = this.props.product;
        
        const pridscSelected = 
           sort === 'pri_dsc'?
           
            (<Fragment>
               <DropdownItem onClick={this.props.pri_dsc_clicked} href="#">
               <font color="Blue">
                   <strong>Price: High to Low</strong>                   
                </font>                   
               </DropdownItem>                       
           </Fragment> )
             
         : (<DropdownItem onClick={this.props.pri_dsc_clicked} href="#">
         <font color="Blue">
         Price: High to Low 
          </font>                   
         </DropdownItem>                       
  )

        
        
        
            

        return(
            
             pridscSelected
            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product    
});

export default connect(mapStateToProps, { pri_dsc_clicked })(Pri_Dsc);


