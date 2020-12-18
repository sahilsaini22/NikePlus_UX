import axios from 'axios';
import { GET_PRODUCTS, GET_SINGLE,  PRODUCTS_LOADING, MEN, WOMEN, KIDS, SHOES,
TSHIRT, PANTS, SHORTS, JACKETS, ACCESSORIES, ALLTYPES,
ALLSPORTS, RUNNING, FOOTBALL, BASKETBALL, TENNIS,
PRI_ASC, PRI_DSC, RAT_ASC, RAT_DSC ,
LOWER, HIGHER, NEW, DISCOUNT , RESET} from './types'; 
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';



export const getProducts = () =>   dispatch => {
    dispatch(setItemsLoading()); 
    
   
        axios.get('http://localhost:4000/api/products/')    
        .then(res => dispatch({
            type: GET_PRODUCTS ,
            payload: res.data
        })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

    
};



export const getSingle = (_id) =>   dispatch => {
    
    
   
        axios.get(`http://localhost:4000/api/products/${_id}`)    
        .then(res => dispatch({
            type: GET_SINGLE ,
            payload: res.data
        })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};


//Men Clicked
export const men_clicked = () =>  {
    
    return {
        type: MEN
    }
};

//Women Clicked
export const women_clicked = () => {
    return {
        type: WOMEN
    }
};


//KIDS Clicked
export const kids_clicked = () => {
    return {
        type: KIDS
    }
};

//Shoes Clicked
export const shoes_clicked = () =>  {
    
    return {
        type: SHOES
    }
};

//Tshirt Clicked
export const tshirt_clicked = () =>  {
    
    return {
        type: TSHIRT
    }
};

//Pants Clicked
export const pants_clicked = () =>  {
    
    return {
        type: PANTS
    }
};

//SHORTS Clicked
export const shorts_clicked = () =>  {
    
    return {
        type: SHORTS
    }
};

//jackets Clicked
export const jackets_clicked = () =>  {
    
    return {
        type: JACKETS
    }
};

//ACCESSORIES Clicked
export const accessories_clicked = () =>  {
    
    return {
        type: ACCESSORIES
    }
};

//All Types Clicked
export const alltypes_clicked = () =>  {
    
    return {
        type: ALLTYPES
    }
};


//All Sports Clicked
export const allsports_clicked = () =>  {
    
    return {
        type: ALLSPORTS
    }
};

//Running Clicked
export const running_clicked = () =>  {
    
    return {
        type: RUNNING
    }
};


//Football Clicked
export const football_clicked = () =>  {
    
    return {
        type: FOOTBALL
    }
};

//Basketball Clicked
export const basketball_clicked = () =>  {
    
    return {
        type: BASKETBALL
    }
};


//Tennis Clicked
export const tennis_clicked = () =>  {
    
    return {
        type: TENNIS
    }
};


//SORTING: Price Ascending Clicked
export const pri_asc_clicked = () =>  {
    
    return {
        type: PRI_ASC
    }
};

//SORTING: Price Descending Clicked
export const pri_dsc_clicked = () =>  {
    
    return {
        type: PRI_DSC
    }
};

//SORTING: Rating Ascending Clicked
export const rat_asc_clicked = () =>  {
    
    return {
        type: RAT_ASC
    }
};

//SORTING: Rating Descending Clicked
export const rat_dsc_clicked = () =>  {
    
    return {
        type: RAT_DSC
    }
};

//Reset filters
export const reset = () =>  {
    
    return {
        type: RESET
    }
};

//Range Selected
export const lower = (lowerrange) => dispatch => {
    
    dispatch({
        type: LOWER,
        payload: lowerrange
    })
    
};

export const higher = (higherrange) => dispatch => {
    
    dispatch({
        type: HIGHER,
        payload: higherrange
    })
    
};


export const discount = (disc) => dispatch => {
    
    dispatch({
        type: DISCOUNT,
        payload: disc
    }) 
};

export const newp = (ne) => dispatch => {
    
    dispatch({
        type: NEW,
        payload: ne
    }) 
};

export const setItemsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}