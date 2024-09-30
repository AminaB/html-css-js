import React from 'react';
import Header from './components/Header';
import {useState} from "react";
import feedbackData from "./data/FeedbackData";
import Feedbacklist from "./components/Feedbacklist";

function App() {
    const [feedback, setFeedback] = React.useState(feedbackData);
    return (
        <>
            <Header text={"hello world"} />
            <div className="container">
                <Feedbacklist  feedback={feedback}  setFeedback={setFeedback}  />
            </div>
        </>
    )
}

export default App;
