import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../features/actions/actions';

class Home extends Component {

    handleClick = (productId) => {
        this.props.addToCart(productId);
    }

    render() {
        let productList = this.props.products.map(product => {
            let isExist = this.props.addedProducts.filter(d => d.productId === product.productId).length > 0;
            return (
                <div className="card" key={product.productId}>
                    <div className="card-image">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{product.title}</span>
                        <p>{product.desc}</p>
                        <p><b>{product.price} ₺</b></p>
                        <br />
                        <button className="waves-effect waves-light btn-small red" onClick={() => { this.handleClick(product.productId) }} disabled={isExist}>Add to Cart</button>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <br />
                <div className="box">
                    {productList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        addedProducts: state.addedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productId) => { dispatch(addToCart(productId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
