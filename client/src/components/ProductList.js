import React, {Component, Fragment , useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from  'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import{ connect } from 'react-redux';
import { getProducts, getSingle } from '../actions/productActions';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';



class ProductList extends Component{  
  state = {
    
  }   
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: true,
          selected: ''
        };
        this.gotoDetail = this.gotoDetail.bind(this);
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

    info = (flag) => {
      const x = 
        flag === true ?
        'on discount' 
        : ''
      
      return x
    }


    newInfo = (flag) => {
      const x = 
        flag === true ?
        'new arrival' 
        : ''
      console.log(x)
      return x
    }

    gotoDetail = (id) => {
      this.props.getSingle(id)
    }
   
       
       
    

     render(){                       
         const {  products, category, type, sport, sort , lowerrange, higherrange, discount, newi, reset} = this.props.product;
         
         /*
         const filtered = 
           category === 'all' && type ==='all' && sport === 'all' ?
           products
         : products.filter(x => x.category === category && x.type === type &&
                      x.sport === sport )
          */
                      /*
         const filtered_type = 
           type === 'all'?
            filtered_cat
         : filtered_cat.filter(x => x.type === type)
         const filtered = 
         type === 'all'?
          filtered_type
       : filtered_type.filter(x => x.sport === sport)
       */
            
      let filtered = 
          category === 'all'?
        products
      : products.filter(x => x.category === category)

      filtered = 
          type === 'all'?
        filtered
      : filtered.filter(x => x.type === type)

      filtered = 
          sport === 'all'?
        filtered
      : filtered.filter(x => x.sport === sport)

      let filtered_d =
          discount === true ?
          filtered.filter(x => x.discount === true )
          :
          filtered

          let filtered_n =
          newi === true ?
          filtered_d.filter(x => x.newp === true )
          :
          filtered_d
      
      let filtered_l =       
           filtered_n.filter(x => x.price >= lowerrange && x.price <= higherrange)
      
      

      const sorted = 
          sort === 'rat_dsc'?
        filtered_l.sort((a, b) => (b.rating - a.rating))
      : sort === 'rat_asc'?
        filtered_l.sort((a, b) => (a.rating - b.rating))
      :
        sort === 'pri_asc'?
        filtered_l.sort((a, b) => (a.price - b.price))
      :
        sort === 'pri_dsc'?
        filtered_l.sort((a, b) => (b.price - a.price))
      :
      filtered_l


          filtered_l = reset === true ?
          products.filter(x => x.category === category)
          : filtered_l


          const no_prod =           
            <Fragment>               
               <font color="grey" size="5" style = {{  textAlign:"center", marginTop: "50%"}}>Sorry, at this moment we have no products matching with your filter criteria</font>               
           </Fragment> 
          
          const nop = filtered_l.length === 0 ?
          no_prod : ''

         return(

          

          <Container style = {{  textAlign:"left", marginLeft: "21%", marginTop: "14%", position: "absolute", top:"0%"}}>
                
                {nop}
               
          <TransitionGroup className="product-list">
              {sorted.map(({_id, description, price, sport, rating, category, discount, 
              newp , imagepath }) => (
                 
                 
                 
                  <CSSTransition key={_id} timeout={500} classNames= "fade" >

                  
                  
                  <div class="container"> 
                  <div class="row row-cols-2 row-cols-lg-4 gx-0 g-lg-0" style = {{paddingBottom:"30px"}} >
                 <div class="col-6">
                 <div class="p-0  bg-light">  <br/> </div>
               </div>
                  <div class="row-6">
                    <div class="p-3 bg-light" style = {{fontWeight: "bold"}}>
                    {description} <br/> 
                    <div style ={{fontWeight:"normal"}}><font color="blue"> {this.info(discount)} {this.newInfo(newp)} </font> <br/> {price} € <br/>{rating}/5 <br/> {sport}    &nbsp;  </div>
                    <br/> 
                    <Button
                    className="remove-btn"
                    color="success"                    
                    style={{float: 'left' } }
                    size="sm">Add to Cart</Button> 
                    <Button
                   className="remove-btn"
                   color="success"
                   style={{float: 'left'} }
                   size="sm">Bookmark Product</Button>   <br/> <br/> <br/>
                    </div>
                  </div>
              </div>
                  </div>   

                  
                  
              
              
            
                     
                 

                  </CSSTransition>
              ))}
             
          </TransitionGroup>
              
    </Container>
             
         );
     }
}

ProductList.propTypes = {
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
        (ProductList);