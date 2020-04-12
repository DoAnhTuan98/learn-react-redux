import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/message';
import { deleteCart, increaseQuantity, decreaseQuantity } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalItem(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_CART_EMTY}</td>
        </tr>;
        if(cart.length > 0) {
           result = cart.map((cartItem,index) => {
               return <CartItem 
                key={index} 
                cartItem={cartItem} 
                onDeleteCart={this.props.onDeleteCart}
                onIncreaseQuantity={this.props.onIncreaseQuantity}
                onDecreaseQuantity={this.props.onDecreaseQuantity} 
               />
           })
        }
        return result;
    }
    showTotalItem = (cart) => {
        if(cart.length > 0) {
            return <CartResult cart={cart} />
        }
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    onDeleteCart : PropTypes.func.isRequired,
    onIncreaseQuantity : PropTypes.func.isRequired,
    onDecreaseQuantity : PropTypes.func.isRequired 
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteCart : (cartItem) => {
            dispatch(deleteCart(cartItem))
        },
        onIncreaseQuantity : (cartItem) => {
            dispatch(increaseQuantity(cartItem))
        },
        onDecreaseQuantity : (cartItem) => {
            dispatch(decreaseQuantity(cartItem))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
