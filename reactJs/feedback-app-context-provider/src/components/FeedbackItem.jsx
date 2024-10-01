import {FaTimes} from 'react-icons/fa'
import React from 'react';
import {useContext}  from "react";

import Card from './shared/Card';
import PropTypes   from "prop-types";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item}) {
    const {deleteFeedBack }= useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
            {/*<button onClick={handleClick}>click</button>*/}
        </Card>

    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem;
