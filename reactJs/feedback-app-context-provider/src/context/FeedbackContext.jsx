import React from 'react';
import {useState, createContext, useEffect} from "react";

const FeedbackContext=createContext(undefined)

export const FeedbackProvider=({children})=>{
    const[isLoading, setIsLoading]=useState(true);
    const [feedback,setFeedback]=useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })
    useEffect(()=>{
        fetchFeedback();
    },[])

    // fetcch data
    const fetchFeedback= async ()=>{
        const response= await fetch('/feedback?_sort=id&_order=desc');
        const data =await response.json();
        setFeedback(data);
        setIsLoading(false);
    }
    // edi item
    const editFeedback = (item)=>{
        setFeedbackEdit({item, edit:true});
    }
    // Update feedback item
    const updateFeedback= async (id,updItem)=>{
       const response= await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                contentType:'application/json',
            },
            body:JSON.stringify(updItem)
        })
        const data= await response.json();
        setFeedback(feedback.map((item)=>
             (item.id===id? {...item, ...data}: item))
        )
    }
    const deleteFeedBack = async (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
            await fetch(`/feedback/${id}`,
                {method:'DELETE',})
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }
    const addFeedback = async (newFeedBack) => {
        const response= await fetch('/feedback/', {
            method: 'POST',
            headers: {
                contentType: 'application/json',
            },
            body: JSON.stringify(newFeedBack)
        });
        const data=await response.json();
        setFeedback([data,...feedback]);
    }
    return <FeedbackContext.Provider  value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        updateFeedback,

    }}> {children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
