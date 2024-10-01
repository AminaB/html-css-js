import React, {useState} from 'react';
import Header from './components/Header';
import feedbackData from "./data/FeedbackData";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [feedback, setFeedback] = useState(feedbackData);
    const deleteFeedBack = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
           setFeedback(feedbackData.filter((item) => item.id !== id))
        }

    }
    const addFeedback = (newFeedBack) => {
        newFeedBack.id=uuidv4();

        setFeedback([newFeedBack,...feedbackData]);
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedBackForm handleAddFeedback={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <Feedbacklist  feedback={feedback}  handleDelete={deleteFeedBack} />
            </div>
        </>
    )
}

export default App;
