import React from 'react';
import profilePicture from "../../../static/assets/images/bio/florian-klauer-mk7D-4UCfmg-unsplash.jpg"

export default function() {
    return(
        <div className="content-page-wrapper">
        <div 
        className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        />
        <div className="right-column">
        Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Omnis quod consectetur, 
        est ipsum magnam amet excepturi numquam accusantium inventore accusamus officiis quasi 
        totam repellat vero voluptate voluptatibus quae praesentium. Nostrum, nisi a porro iure omnis laborum, 
        sapiente minus ab eaque, eveniet officiis quos harum consequatur debitis autem architecto est dignissimos?
        </div>
        </div>
    );
 }