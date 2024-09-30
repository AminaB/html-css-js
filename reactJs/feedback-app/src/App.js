import React from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
function App() {
    return (
        <>
            <Header text={"hello world"} />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}



export default App;
