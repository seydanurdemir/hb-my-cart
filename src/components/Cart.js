import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../features/actions/actions';

class Cart extends Component {

    handleClick = (productId) => {
        this.props.removeFromCart(productId);
    }

    render() {
        return (
            <ul className="collection">
                {
                    this.props.addedProducts.map(product => {
                        return (<li className="collection-item" key={product.productId}>
                            <div className="item-img">
                                <img src={product.img} alt={product.img} className="" />
                            </div>
                            <div className="item-desc">
                                <span className="title">{product.title}</span>
                                <button className="btn-outline-small" onClick={() => { this.handleClick(product.productId) }}>Kaldır</button>
                            </div>
                        </li>
                        )
                    })
                }
                {
                    this.props.addedProducts.length === 0 &&
                    <li style={{ color: "#000", textAlign: "center", float: "none" }}>Sepetin şu an boş</li>
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addedProducts: state.addedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (productId) => { dispatch(removeFromCart(productId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
