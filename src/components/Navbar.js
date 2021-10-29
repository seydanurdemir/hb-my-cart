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
                    <Link to="/" className="brand-logo">HepsiBurada</Link>
                    <ul className="right">
                        <li>
                            <form>
                                <div className="input-field" style={{ marginRight: "20vh", width: "80vh" }}>
                                    <input id="search" type="search" required style={{ height: "auto" }} placeholder="Search" />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">Search</i></label>
                                    <i className="material-icons">Close</i>
                                </div>
                            </form>
                        </li>
                        <li>
                            <div onClick={this.toggle} style={{ cursor: "pointer" }}>My Cart
                                {
                                    this.props.addedProducts.length > 0 &&
                                    <span className="notifications" style={{ position: "absolute", padding: 4, background: "red", textAlign: "center", color: "white" }}>
                                        {this.props.addedProducts.length}
                                    </span>
                                }
                            </div>
                        </li>
                    </ul>
                    {
                        this.state.popoverOpen &&
                        <div className="popover right" style={{ position: "absolute", display: "inline-block", marginTop: 65, left: "74%" }}>
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
