import React from 'react';
import { Link } from 'react-router-dom';
export default function() {
       return (
        <div>
            <h2>We couldnt find the page you are looking for.</h2>

            <Link to="/">Return to homepage</Link>
        </div>
   );
}