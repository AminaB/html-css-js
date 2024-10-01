import React from 'react';
import {useState} from "react";

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10);

    function handleChange(e) {
        //console.log(+e.target.value);
        setSelected(+e.target.value);
        select(+e.target.value);
    }

    return (
        <ul className='rating'>
            <li>
                <input
                    type="radio"
                    id='num1'
                    name='rating'
                    onChange={handleChange}
                    value='1'
                    checked={selected === 1}
                />
                <label htmlFor='num1'>1</label>
            </li>
            <li>
                <input
                    type="radio"
                    id='num2'
                    name='rating'
                    value='2'
                    onChange={handleChange}
                    checked={selected === 2}
                />
                <label htmlFor='num2'>2</label>
            </li>
            <li>
                <input
                    type="radio"
                    id='num10'
                    name='rating'
                    onChange={handleChange}
                    value='10'
                    checked={selected === 10}
                />
                <label htmlFor='num10'>10</label>
            </li>
        </ul>
    );
}

export default RatingSelect;
