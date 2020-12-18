import React, {Component, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from  'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import{ connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';




class Popular extends Component{  
  state = {
    
  }   
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: true
        };
      }


      static propTypes = {
        auth: PropTypes.object.isRequired
      }


      

    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
    componentDidMount()
    {
        this.props.getProducts();
    }


    

    getStyle = () => {                    
         return{                             
           backgroundColor: "#BDF7CC" 
         }
       }
   
       
       
    

     render(){                       
         const { products, category, type, sport, sort , lowerrange, higherrange, discount, newi} = this.props.product;
         
         let sorted = products.sort((a, b) => (b.rating - a.rating))
         sorted = sorted.slice(0,9)

         let cheap = products.filter(x=> x.rating >= 4)
         cheap = cheap.sort((a, b) => (a.price - b.price))
         cheap = cheap.slice(0,9)
          
         return(

          
             <Container style = {{ paddingLeft: "3mm", textAlign:"left", width:"1037px",  margin: "03%", position: "absolute" , top: "0"}}>
                
                
               
                   <TransitionGroup className="product-list">
                
                   <p><strong>Popular Products</strong></p>
                    <ListGroup horizontal  width="100%" className="list-group-horizontal overflow-auto my-1">

                      
                       {sorted.map(({_id, description, price, sport, rating, category, imagepath }) => (
                           <CSSTransition key={_id} timeout={500} classNames= "fade" >
                           
                           
      
                          <ListGroupItem tag="a" href="#">
                            <div>
                                
                            </div>
                            <strong>{description}</strong>  <br/>                          
                            {price}€ &nbsp; &nbsp;&nbsp;&nbsp;
                            {rating}
                          </ListGroupItem>


                         
        
      
    

                           </CSSTransition>
                       ))}
                      
                      </ListGroup>



                        

                        <br/><br/>
                      <p><strong>Value for Money</strong></p>
                    <ListGroup horizontal horizontal className="list-group-horizontal overflow-auto my-1">
                       {cheap.map(({_id, description, price, sport, rating, category, imagepath }) => (
                           <CSSTransition key={_id} timeout={500} classNames= "fade" >
                           
                           
      
                          <ListGroupItem tag="a" href="#">
                            <div>
                                
                            </div>
                            <strong>{description}</strong>  <br/>                          
                            {price}€ &nbsp; &nbsp;&nbsp;&nbsp;
                            {rating}
                          </ListGroupItem>
        
      
    

                           </CSSTransition>
                       ))}
                      
                      </ListGroup>

                   </TransitionGroup>
               


             </Container>
             
         );
     }
}

Popular.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.product,    
    auth: state.auth, 
    category: state.category,
    type: state.type, 
    sport: state.sport, 
    sort: state.sort,
    lowerrange: state.lowerrange
});

export default connect(mapStateToProps, 
        { getProducts  })
        (Popular);