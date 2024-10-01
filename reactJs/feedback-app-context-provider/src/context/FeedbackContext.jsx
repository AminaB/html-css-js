import React from 'react';
import {useState, createContext} from "react";
import feedbackData from "../data/FeedbackData";

const FeedbackContext=createContext(undefined)

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ]);
    const deleteFeedBack = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
            setFeedback(feedbackData.filter((item) => item.id !== id))
        }

    }
    return <FeedbackContext.Provider  value={{
        feedback,
        deleteFeedBack
    }}> {children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
