import React from 'react';
import {useState, createContext} from "react";
import {v4 as uuidv4} from "uuid";

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
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }
    const addFeedback = (newFeedBack) => {
        newFeedBack.id=uuidv4();
        setFeedback([newFeedBack,...feedback]);
    }
    return <FeedbackContext.Provider  value={{
        feedback,
        deleteFeedBack,
        addFeedback
    }}> {children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
