import React from 'react';
import {useState, useContext, useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";
import feedBackForm from "./FeedBackForm";

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10);
    const { feedbackEdit} = useContext(FeedbackContext);
    useEffect(() => {
        setSelected(feedbackEdit.item.rating);
    }, [feedbackEdit]);
    function handleChange(e) {
        //console.log(+e.target.value);
        setSelected(+e.target.value);
        select(+e.target.value);
    }

    return (
        <ul className='rating'>
            <li>
                <input
                    type="radio"
                    id='num1'
                    name='rating'
                    onChange={handleChange}
                    value='1'
                    checked={selected === 1}
                />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input
                    type="radio"
                    id='num9'
                    name='rating'
                    value='9'
                    onChange={handleChange}
                    checked={selected === 9}
                />
                <label htmlFor='num9'>9</label>
            </li>
            <li>
                <input
                    type="radio"
                    id='num10'
                    name='rating'
                    onChange={handleChange}
                    value='10'
                    checked={selected === 10}
                />
                <label htmlFor='num10'>10</label>
            </li>
        </ul>
    );
}

export default RatingSelect;
