import React, {useState} from 'react';
import Header from './components/Header';
import feedbackData from "./data/FeedbackData";
import Feedbacklist from "./components/Feedbacklist";

function App() {
    const [feedback, setFeedback] = useState(feedbackData);
    const deleteFeedBack = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")){
           setFeedback(feedbackData.filter((item) => item.id !== id))
        }

    }
    return (
        <>
            <Header />
            <div className="container">
                <Feedbacklist  feedback={feedback}  handleDelete={deleteFeedBack} />
            </div>
        </>
    )
}

export default App;
