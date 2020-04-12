import * as types from './../constants/actionsTypes';
import * as Message from './../constants/message';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {

    switch (action.type) {
        case types.CHANGE_MESSAGE:
            state = Message.MSG_ADD_TO_CART_SUCCESS;
            return [...state];
        case types.DELETE_CART:
            state = Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
            return [...state];
        case types.INCREASE_QUANTITY:
            state = Message.MSG_UPDATE_CART_SUCCESS;
            return [...state];
        case types.DECREASE_QUANTITY:
            state = Message.MSG_UPDATE_CART_SUCCESS;
            return [...state];
        default:
            return [...state];
    }
}

export default message;