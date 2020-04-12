import * as types from './../constants/actionsTypes';

export const addToCart = (product,quantity) => {
    return {
        type : types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
}

export const updateCart = () => {
    return {
        type : types.CHANGE_MESSAGE
    }
}

export const deleteCart = (cartItem) => {
    return {
        type : types.DELETE_CART,
        cartItem
    }
}

export const increaseQuantity = (cartItem) => {
    return {
        type : types.INCREASE_QUANTITY,
        cartItem
    }
}

export const decreaseQuantity = (cartItem) => {
    return {
        type : types.DECREASE_QUANTITY,
        cartItem
    }
}