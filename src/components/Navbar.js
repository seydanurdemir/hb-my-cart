import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false
        };
    }

    toggle = () => this.setState(prevState => ({ popoverOpen: !prevState.popoverOpen }));

    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo orange-text"><b>hepsiburada</b></Link>
                    <ul className="right">
                        <li>
                            <form>
                                <div className="input-field" style={{ marginRight: "20vh", width: "70vh" }}>
                                    <input type="search" id="search" className="form-control search-form" placeholder="25 milyon'dan fazla ürün içerisinde ara" />
                                    <i className="material-icons">search</i>
                                </div>
                            </form>
                        </li>
                        <li>
                            <Link to="#" onClick={this.toggle} style={{ cursor: "pointer" }}>Sepetim
                                {this.props.addedProducts.length > 0 &&
                                    <span className="notifications" style={{ position: "absolute", padding: 4, background: "red", textAlign: "center", color: "white" }}>
                                        {this.props.addedProducts.length}
                                    </span>
                                }
                            </Link>
                        </li>
                    </ul>
                    {
                        this.state.popoverOpen &&
                        <div className="popover right" style={{ position: "absolute", display: "inline-block", marginTop: 42, left: "66.7%" }}>
                            <Cart />
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addedProducts: state.addedProducts
    }
}

export default connect(mapStateToProps, null)(Navbar);
