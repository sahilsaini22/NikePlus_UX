import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { higher } from '../actions/productActions';
import PropTypes from 'prop-types';







export class Price_High extends Component{    
   static propTypes = {
        higher: PropTypes.func.isRequired        
     
        
    }
    
    constructor(props) {
        
        super(props);
        this.state = {
            
            higherrange : props.product.products.higherrange
            //val:  props.lowerrange
        };
      
        this.changeValue = this.changeValue.bind(this);
    }
      
    


    changeValue(e) {
        this.setState({ higherrange: e.target.value });                        
        this.props.higher(this.state.higherrange);
    }
      

     
    render(){

        
        const {  lowerrange, higherrange, min, max } = this.props.product;
        
    

        const highSlider = 
           
            (<Fragment>
               <input
                    type="range"
                    value={higherrange}
                    min={lowerrange}
                    max={max}
                    onInput={this.changeValue}
                    name="myslider"
                    step={25} />  
                    { higherrange} 
                                       
           </Fragment> )
                     
        return(            
            highSlider            
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.product     

    
});

export default connect(mapStateToProps, { higher })(Price_High);


