
import React from 'react';
import PropTypes from "prop-types";

function Header(props) {
    return (
        <header>
            <div className="container">
                <h1>{props.text}</h1>
            </div>
        </header>
    );
}
Header.defaultProps = {
    text: 'Hello!',

}
Header.propTypes = {
    text: PropTypes.string,
}
export default Header;

