const mainReducer = (state = {idx: -1, products: {}, likes: [], dislikes: []}, action) => {
    switch (action.type) {
        case 'PRODUCTS_INFORMATION':
            if(state.idx === -1) {
                let newState = Object.assign({}, state);
                newState.products = action.products;
                newState.idx++;
                return newState;
            }
            else return state;
        case 'LIKE_PRODUCT':
            let newState = Object.assign({}, state);
            let curProduct = action.product;
            if(action.sentiment === 'like') newState.likes.push({name: curProduct.name, brand: curProduct.brand});
            if(action.sentiment === 'dislike') newState.dislikes.push({name: curProduct.name, brand: curProduct.brand});
            newState.idx++;
            return newState;
        default: return state;
    }
}

export default mainReducer;