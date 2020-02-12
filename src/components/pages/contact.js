import React from 'react';
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {

    return(
        <div className="content-page-wrapper">
        <div 
        className="left-column" 
        style={{
            background: "url(" + contactPagePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        <div className="right-column">
            <div className="contact-bullet-points">
                <div className="bullet-point-group">
                    <div className="icons">
                    <FontAwesomeIcon icon="phone"/>
                    </div>
                    <div className="text">
                            555-555-5555
                        </div>
                </div>
                    <div className="bullet-point-group">
                        <div className="icons">
                        <FontAwesomeIcon icon="envelope"/>
                        </div>
                        <div className="text">
                            jeremy@ware.com
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icons">
                        <FontAwesomeIcon icon="map-marked-alt"/>
                        </div>
                        <div className="text">
                            Orlando, FL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }