import React from 'react';
import Card from '../components/shared/Card';

function AboutPage(props) {
    return (
        <Card>
            <h>About this page</h>
            <p> this is a react app to leave feedback for a service</p>
            <p> version</p>
            <a href='/'> back to home</a> // do not do that like this way
        </Card>
    );
}

export default AboutPage;
