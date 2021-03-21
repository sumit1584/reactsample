import React from 'react';
import './Person.css'

const person = (Props) => {
    return (
        <div className="Person">
            <h1>I'm  {Props.name} and i am { Props.age } years old</h1>
            <p onClick={Props.click}>{Props.children}</p>
            <input type="text" onChange={Props.changed} value={Props.name}></input>
        </div>
    )
};

export default person;
