import React, { Component } from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { addToCart,updateCart } from './../actions/index';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((product,index) => {
                return <Product 
                    key={index} 
                    product={product} 
                    onAddToCart={this.props.onAddToCart} 
                    updateCart={this.props.onUpdateCart}
                />
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onUpdateCart : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired
}

const mapStatetoProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart : (product) => {
            dispatch(addToCart(product,1))
        },
        onUpdateCart : () => {
            dispatch(updateCart())
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);
