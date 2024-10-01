import React from 'react';
import {useState, createContext} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext=createContext(undefined)

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id: 1,
            text: 'This item 1 is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item 2 is from context',
            rating: 9
        },
        {
            id: 3,
            text: 'This item  is from context',
            rating: 9
        }
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })
    // edi item
    const editFeedback = (item)=>{
        setFeedbackEdit({item, edit:true});
    }
    // Update feedback item
    const updateFeedback=(id,updItem)=>{
        setFeedback(feedback.map((item)=>
             (item.id===+id? {...item, ...updItem}: item))
        )
    }
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
        feedbackEdit,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,

    }}> {children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
