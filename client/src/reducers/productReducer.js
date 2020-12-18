import { GET_PRODUCTS,  GET_SINGLE ,PRODUCTS_LOADING, MEN, WOMEN, KIDS, 
SHOES, TSHIRT, PANTS, SHORTS, JACKETS, ACCESSORIES , ALLTYPES, FOOTBALL, BASKETBALL
, TENNIS, ALLSPORTS, RUNNING,
PRI_ASC, PRI_DSC, RAT_ASC, RAT_DSC,
LOWER, HIGHER, DISCOUNT, NEW, RESET
 } from '../actions/types';



const initialState= {
    products: [],
    category: '',
    type: '',
    sport: '',
    sort: '',
    range: '',
    lowerrange: 0,
    higherrange: 0,
    min: 0,
    max: 0,
    higher: '',
    loading: false,
    newi: false,
    discount: false,
    reset: false,
    selected: []
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS: 
        return {
            ...state,
            products: action.payload,
            loading: false,
            category: 'men',
            type: 'all',
            sport: 'all', 
            sort: 'rat_dsc',
            higher: '',
            lower: '',
            higherrange: 500,
            lowerrange: 0,
            min: 0,
            max: 500,
            discount: false, 
            newi: false,
            reset: false,
            selid: '',
            selected: []
        } ;   
        case GET_SINGLE: 
        return {
            ...state,
            selected: action.payload
        } ;   
        case MEN: 
        return{
            ...state,            
            category: 'men'
        };
        case WOMEN: 
        return{
            ...state,            
            category: 'women'
        };
        case KIDS: 
        return{
            ...state, 
            category: 'kids'
        };
        case SHOES: 
        return{
            ...state, 
            type: 'shoes'
        };
        case TSHIRT: 
        return{
            ...state, 
            type: 'tshirt'
        };
        case PANTS: 
        return{
            ...state, 
            type: 'pants'
        };
        case SHORTS: 
        return{
            ...state, 
            type: 'shorts'
        };
        case JACKETS: 
        return{
            ...state, 
            type: 'jackets'
        };
        case ACCESSORIES: 
        return{
            ...state, 
            type: 'accessories'
        };
        case ALLTYPES: 
        return{
            ...state, 
            type: 'all'
        };
        case ALLSPORTS: 
        return{
            ...state, 
            sport: 'all'
        };
        case RUNNING: 
        return{
            ...state, 
            sport: 'running'
        };
        case FOOTBALL: 
        return{
            ...state, 
            sport: 'football'
        };
        case BASKETBALL: 
        return{
            ...state, 
            sport: 'basketball'
        };
        case TENNIS: 
        return{
            ...state, 
            sport: 'tennis'
        };
        case PRI_ASC: 
        return{
            ...state, 
            sort: 'pri_asc'
        };
        case PRI_DSC: 
        return{
            ...state, 
            sort: 'pri_dsc'
        };
        case RAT_ASC: 
        return{
            ...state, 
            sort: 'rat_asc'
        };
        case RAT_DSC: 
        return{
            ...state, 
            sort: 'rat_dsc'
        };
        case LOWER: 
        return{
            ...state, 
            lower: 'true' ,
            lowerrange: action.payload

        };
        case HIGHER: 
        return{
            ...state, 
            higher: 'true',
            higherrange: action.payload
        };
        case DISCOUNT: 
        return{
            ...state,             
            discount: action.payload
        };
        case NEW: 
        return{
            ...state,             
            newi: action.payload
        };
        case RESET:
        return{
            ...state,             
            newi: '',
            discount: '',
            type: 'all',
            sport: 'all',
            lowerrange: 0,
            higherrange: 500,
            higher: false,
            lower: false,
            reset: true
        };
        case PRODUCTS_LOADING: 
            return{
                ...state, 
                loading: true
            }
        default:
            return state; 
    }
}