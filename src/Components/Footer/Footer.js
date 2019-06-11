import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer">
                    <footer className="mainfooter container" role="contentinfo">
                        <div className="footer-middle">
                            <div className="container botPad topPad" >
                                <div className="row">
                                    <img src="img/greylogo.png" className="greylogo-image" alt="" srcset=""/>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    < div className = "col-md-3 col-sm-6 allPad" >
                                        <div className="footer-pad">
                                            <h4 className="fontBold">Get To Know Us</h4>
                                            <address>
                                                <ul className="list-unstyled">
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                    <li><a href="#">Terms & Conditions</a></li>
                                                    <li><a href="#">Privacy Agreements</a></li>
                                                </ul>
                                            </address>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 allPad">
                                        <div className="footer-pad">
                                            <h4 className="fontBold">Shop</h4>
                                            <ul className="list-unstyled">
                                                <li><a href="#">ID</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 allPad">
                                        <div className="footer-pad">
                                            <h4 className="fontBold">Help</h4>
                                            <ul className="list-unstyled">
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Shipping Info</a></li>
                                                <li><a href="#">Return Made Easy</a></li>
                                                <li><a href="#">Help Center / FAQ</a></li>
                                                <li><a href="#">Report A Bug</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 allPad">
                                        <div className="footer-pad">
                                            <h4 className="fontBold">Get Social With Us</h4>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" className="rightPad"><i className="fa fa-instagram    "></i></a>
                                                    <a href="#"  className="rightPad"><i className="fa fa-facebook"
                                                            aria-hidden="true"></i></a>
                                                    <a href="#"  className="rightPad"><i className="fa fa-twitter"
                                                            aria-hidden="true"></i></a></li>
                                                <li>
                                                    <img src="img/shipping.png" alt="" srcset=""/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-12">
                                        <p className="text-center">Copyright &copy; 2019 <a href="#">Kona's Closet</a> | All rights
                                            reserved | <a href="https://clickysoft.com/" target="_blank"
                                                rel="noopener noreferrer">Powered
                                                By Clickysoft</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-md-12">
                                        <p className="text-center"><img src="img/payment.png" alt="" srcset=""/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;