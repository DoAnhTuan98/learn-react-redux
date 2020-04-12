import * as types from './../constants/actionsTypes';
var data = JSON.parse(localStorage.getItem(('CART')));

var initialState = data ? data : [];

var findProductInState = (state,product) => {
    var index = -1;
    for (var i =0;i<state.length;i++) {
        if(state[i].product.id === product.id) {
            index = i;
            break;
        }
    }
    return index;
}
var findCartInState = (state,cartItem) => { 
    var index = -1; 
    for (var i =0;i<state.length;i++) {
        if(state[i].product.id === cartItem.product.id) {
            index = i;
            break;
        }
    }
    return index;
}

const cart = (state = initialState, action) => {
    var { product,quantity,cartItem } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInState(state,product)
            if(index !== -1 ) {
                state[index].quantity += quantity
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DELETE_CART:
            index = findCartInState(state,cartItem)
            state.splice(index,1);
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        case types.INCREASE_QUANTITY:
            index = findCartInState(state,cartItem);
            state[index].quantity += 1;
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DECREASE_QUANTITY:
            index = findCartInState(state,cartItem);
            if(state[index].quantity > 0) {
                state[index].quantity -= 1
            }else {
                state[index].quantity = 0;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default cart;