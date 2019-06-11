import React, { Component } from 'react';

class FourBanner extends Component {
    render() {
        return (
            <div>
                <div id="fourbanner">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-6 manual-mediaquery-card fourbanner-width-5">
                            <div className="card text-justify col-md card-styling">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img src="img/wristband.png" className="align-self-center card-image-size" alt="" srcset=""/>
                                </div>
                                <div className="col-md-9">
                                    <p className="card-text">Kona’s Closet
                                    selection of ID Wristbands & Sport ID Bracelets are lightweight,
                                    comfortable, durable and of course affordable! This combination is an
                                    irresistible choice for athletes of all kinds looking for Emergency ID
                                    Bracelets, Runners ID Bracelets, Triathlon ID Bracelets, Hiking ID
                                    Bracelets, Cycling ID Bracelets, Sport IDs, Kids IDs, much more.</p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img src="img/shoeid.png" className="align-self-center card-image-size" alt="" srcset=""/>
                                </div>
                                <div className="col-md-9">
                                    < p className = "card-text" > Kona’ s Closet’ s
                                    Shoe ID is another great way to quickly and effectively transfer
                                    information in the event of an accident while outdoors. Don’t want to wear
                                    a dog tag or an ID wristband, then our Shoe ID tags are perfect for you.</p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img src="img/wristband.png" className="align-self-center card-image-size" alt=""
                                    srcset=""/>
                                </div>
                                <div className="col-md-9">
                                    <p className="card-text">Kona’s Closet’s
                                    Dog Tag IDs come in a variety of lightweight, comfortable, stylish, and
                                    durable styles and colors. These classic Emergency IDs are great for
                                    activities of all kinds from hiking to biking, cycling to running, and
                                    more.</p>
                                </div>
                                </div>


                                <div className="row">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img src="img/petid.png" className="align-self-center card-image-size" alt=""
                                    srcset=""/>
                                </div>
                                <div className="col-md-9">
                                    < p className = "card-text" > Kona’ s Closet
                                    knows pets are a big part of our lives and outdoor activities, so we have a
                                    wide selection of Pet IDs, designed to protect your best friends in case of
                                    an accident or separation.</p>
                                </div>
                                </div>
                            </div>

                            </div>
                            <div className="banner-band ">
                            <img src="img/band.png" className="img-fluid d-none d-md-block d-lg-block" alt="" srcset=""/>
                            </div>
                        </div>
                        <div className="lady-banner">
                            <img src="img/running.png" className=" img-fluid d-none d-md-block d-lg-block " alt="" srcset=""/>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default FourBanner;