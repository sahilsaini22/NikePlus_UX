import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { lower } from '../actions/productActions';
import PropTypes from 'prop-types';







export class Price_Low extends Component{    
   static propTypes = {
        lower: PropTypes.func.isRequired        
     
        
    }
    
    constructor(props) {
        
        super(props);
        this.state = {
            
            lowerrange : props.product.products.lowerrange
            //val:  props.lowerrange
        };
      
        this.changeValue = this.changeValue.bind(this);
    }
      
    


    changeValue(e) {
        this.setState({ lowerrange: e.target.value });                        
        this.props.lower(this.state.lowerrange);
    }
      

     
    render(){

        
        const {  lowerrange, higherrange, min, max } = this.props.product;
        
        

        const lowSlider = 
           
            (<Fragment>
               <input
                    type="range"
                    value={lowerrange}
                    min={min}
                    max={higherrange}
                    onInput={this.changeValue}
                    name="myslider"
                    step={25} />  
                    { lowerrange} 
                                       
           </Fragment> )
                     
        return(            
            lowSlider            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product     

    
});

export default connect(mapStateToProps, { lower })(Price_Low);


