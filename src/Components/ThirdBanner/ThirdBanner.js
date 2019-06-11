import React, { Component } from 'react';

class ThirdBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div id="thirdbanner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 col-sm">
                                <img src="img/left.jpg" className="img-fluid fullwidth" alt="left image"/>
                            </div>
                            <div className="col-md-4 col-sm">
                                <div className="halfheight fullwidth">
                                    <img src="img/check.jpg" className="img-fluid fullwidth" alt="left image"/>
                                </div>
                                <div className="halfheight fullwidth">
                                <img src="img/check2.jpg" className="img-fluid fullwidth" alt="left image"/>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm">
                                <div className="halfheight fullwidth">
                                <img src="img/check3.jpg" className="img-fluid fullwidth" alt="left image"/>
                                </div>
                                <div className="halfheight fullwidth">
                                <img src="img/check4.jpg" className="img-fluid fullwidth" alt="left image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ThirdBanner;