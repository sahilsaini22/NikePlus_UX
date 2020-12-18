import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'reactstrap';
import { newp, discount } from '../actions/productActions';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const items = [
  'New Arrivals',
  'Discounted Items',
];

class Other_Filters extends Component {
    static propTypes = {
       newp: PropTypes.func.isRequired,
       discount: PropTypes.func.isRequired
     
        
    }

    constructor(props) {
        
        super(props);
        this.state = {
            
            newi : props.product.products.newi,
            discount : props.product.products.discount
            //val:  props.lowerrange
        };
      
        this.na_clicked = this.na_clicked.bind(this);
        this.d_clicked = this.d_clicked.bind(this);
    }
  

  
  

    na_clicked(e) {
        this.setState({ newi: !this.state.newi });
        this.props.newp(this.state.newi);
    }

    d_clicked(e) {
        this.setState({ discount: !this.state.discount });
        this.props.discount(this.state.discount);
    }
  
  

  render() {

    const { newi , discount } = this.props.product;
        
    const newb = 
       newi === true ?
       
        (<Fragment>
           <NavLink  href="#" style={{alignContent:"center"}}>
           <Button onClick={this.na_clicked}  color="success" >New Arrivals</Button>{' '}
            </NavLink>
       </Fragment> )
         
     : (<Fragment>
     <NavLink  href="#">
     <Button onClick={this.na_clicked} outline color="success"  >New Arrivals</Button>{' '}
      </NavLink>
    </Fragment> 
    )


    const newd = 
       discount === true ?
       
        (<Fragment>
           <NavLink  href="#" style={{alignContent:"center"}}>
           <Button  onClick={this.d_clicked} color="success" >Discounted Items</Button>{' '}
            </NavLink>
       </Fragment> )
         
     : (<Fragment>
     <NavLink  href="#">
     <Button onClick={this.d_clicked} outline color="success"  >Discounted Items</Button>{' '}
      </NavLink>
    </Fragment> 
    )



    return (
      
    <div>
      {newb}
      {newd}
    </div>
      
    );
  }
}



const mapStateToProps = (state) => ({
    product: state.product     

    
});

export default connect(mapStateToProps, { newp, discount })(Other_Filters);








/*

export class Other_Filters extends Component{    
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

        
        const {  higherrange, min, max } = this.props.product;
        
    

        const highSlider = 
           
            (<Fragment>
               <input
                    type="range"
                    value={higherrange}
                    min={min}
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

export default connect(mapStateToProps, { others })(Other_Filters);
*/

