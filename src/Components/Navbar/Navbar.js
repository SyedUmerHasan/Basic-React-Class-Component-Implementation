import React, { Component } from 'react';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <header id="header">
            <div className="container d-none d-md-block d-lg-block" id="topheader">
                <div className="row ">
                    <div className="col-md-3 d-flex justify-content-start">
                        <a href="https://www.google.com" className="rightPad"><i className="fa fa-instagram    "></i></a>
                        <a href="https://www.google.com" className="rightPad"><i className="fa fa-facebook"
                                aria-hidden="true"></i></a>
                        <a href="https://www.google.com" className="rightPad"><i className="fa fa-twitter"
                                aria-hidden="true"></i></a>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center ">
                        <a href="tel:https://www.google.com">800-313-1615</a>
                        |
                        <a href="mailto:info@roadrunnerid.com">info@roadrunnerid.com</a>
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex justify-content-end">
                        <a href="https://www.google.com" rel="noopener noreferrer"> Login</a>
                        <a href="https://www.google.com" rel="noopener noreferrer"> Register</a>
                    </div>
                </div>
            </div>
            <div className="backColor" id="navbar">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-3 d-flex justify-content-start align-items-center justify-content-sm-center hideonsm">
                            <div className="input-group">
                                <input type="text" id="search" name="search" className="form-control backColor"
                                    placeholder="Search this blog"/>
                                < div className = "input-group-append backColor">
                                    <button type="button"
                                    className = "btn backColor searchBar" >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1 col-sm-12 d-flex justify-content-center align-items-center">
                            <img src="img/whitelogo.png" alt="logo" srcset="img/whitelogo.png" width="100" height="100"/>
                        </div>
                        <div
                            className="col-md-3 offset-md-1 d-flex justify-content-end align-items-center justify-content-sm-center hideonsm">
                            < ul className="rightIcons" >
                                <li className="displayInline"> <img src="img/user.svg" className="whiteColor" width="25" height="25" alt="" srcset=""/> </li>
                                <li className="displayInline"> <img src="img/shopping-cart.svg" className="whiteColor" width="25" height="25" alt="" srcset=""/> </li>
                                <li className="displayInline"> <i className="fa fa-heart whiteColor" aria-hidden="true" ></i></li >
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mainnavbar">
                    <div className="collapse navbar-collapse col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-sm-center">
                            <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse"
                                data-target="https://www.google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="https://www.google.com">Home <span
                                                className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.google.com">Find Your ID</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.google.com">Accessories</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
         );
    }
    componentDidMount() {
        let heights = window.innerHeight;
        let widths = window.innerWidth;
        if (widths > 767) {
            document.getElementById("header").style.height = heights + 200 + "px";
        } else {
            document.getElementById("header").style.height = heights - 30 * heights / 100 + "px";
        }
    }
}
 
export default Navbar;



