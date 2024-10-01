import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import feedbackData from "./data/FeedbackData";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/aboutPage";


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
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact  path='/' element={
                            <>
                                <FeedBackForm handleAddFeedback={addFeedback}/>
                                <FeedbackStats feedback={feedback} />
                                <Feedbacklist  feedback={feedback}  handleDelete={deleteFeedBack} />
                            </>
                        }>

                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>


                </div>
            </Router>
        </>

    )
}

export default App;
