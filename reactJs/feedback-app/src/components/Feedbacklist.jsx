import React from 'react';
import FeedbackItem from "./FeedbackItem";
function List({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item, index) => (
                <FeedbackItem key={item.id} item={item}  />
            ))}

        </div>
    );
}

export default List;
