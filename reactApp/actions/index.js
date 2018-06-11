import axios from 'axios';

export function loadProducts() {
    return(dispatch) => {
        return axios.get('https://dy9team43h.execute-api.us-west-2.amazonaws.com/dev/products?subcategory=eyeshadow')
            .then((response)=> {
                console.log(response);
                dispatch(presentProducts(response.data.hits));
            })
    }
}

export function presentProducts(hits){
    return{
        type:'PRODUCTS_INFORMATION',
        products: hits
    }
}

export function swipeProduct(product, sentiment) {
    return{
        type:'LIKE_PRODUCT',
        sentiment: sentiment,
        product: product
    }
}