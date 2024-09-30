import React from 'react';
import Card from './shared/Card';
import PropTypes    from "prop-types";
function FeedbackItem({item}) {

    // const handleClick = () => {
    //     setRating((prevState)=>{
    //         return prevState+1;
    //     });
    // }
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}
                {/*<button onClick={handleClick}>click</button>*/}
            </div>
        </Card>

    );
}
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FeedbackItem;
