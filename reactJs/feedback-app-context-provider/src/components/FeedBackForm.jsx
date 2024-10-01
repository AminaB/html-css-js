import React from 'react';
import {useContext} from "react";

import Card from './shared/Card';
import {useState} from "react";
import Button from './shared/Button';
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const [rating, setRating] = useState(10);
    const {addFeedback} = useContext(FeedbackContext);

    function handleTextChange(e) {
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(text.trim().length<=10){
            setMessage('Text must be at least 10 characters.');
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }
       setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback = {
                text: text,
                rating: rating,
            }
            addFeedback(newFeedback);
            setText('')
        }
    }

    return (
        <Card >
            <form  onSubmit={handleSubmit}>
                <h2> How would you rate your service</h2>
                <RatingSelect select={(rating)=>{
                   setRating(rating);
                }}/>
                <div className='input-group'>
                    <input type='text' onChange={handleTextChange} value={text} placeholder='Enter a review' />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className='message'>{message}</div>}
            </form>
        </Card>

    );
}

export default FeedBackForm;
