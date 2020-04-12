import React, { Component } from 'react';
import Header from './components/Header';
import CartContainer from './containers/cartContainer';
import Footer from './components/Footer';
import ProductsContainer from './containers/productsContainer';
import MessageContainter from './containers/messageContainer';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainter />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

}

export default App;
