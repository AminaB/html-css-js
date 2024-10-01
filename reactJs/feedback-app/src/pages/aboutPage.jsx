import React from 'react';
import Card from '../components/shared/Card';
import {Link} from "react-router-dom";

function AboutPage(props) {
    return (
        <Card>
            <h>About this page</h>
            <p> this is a react app to leave feedback for a service</p>
            <p> version</p>
            {/*<a href='/'> back to home</a> // do not do that like this way*/}
            <Link to={'/'}>Back to home page</Link> // it s avoid page refresh using to
        </Card>
    );
}

export default AboutPage;
