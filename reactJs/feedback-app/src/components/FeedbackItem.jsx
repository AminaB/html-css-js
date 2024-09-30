import React from 'react';
import {useState} from "react";

function FeedbackItem({item}) {

    // const handleClick = () => {
    //     setRating((prevState)=>{
    //         return prevState+1;
    //     });
    // }
    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}
            {/*<button onClick={handleClick}>click</button>*/}
            </div>
        </div>
    );
}

export default FeedbackItem;
