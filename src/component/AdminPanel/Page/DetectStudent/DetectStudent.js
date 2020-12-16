import React from 'react';
import { useState } from 'react';

const DetectStudent = () => {
    const [rollNumber, setRollNumber] = useState({})
    const submitRoll = () => {
        fetch('https://secret-headland-48345.herokuapp.com/user', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ roll: rollNumber.roll })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handleRoll = (e) => {
        if (e.target.name === 'roll') {
            const newRoll = { ...rollNumber }
            newRoll.roll = e.target.value;
            setRollNumber(newRoll);
        }
    }
    console.log(rollNumber)
    return (
        <div className="container">
            <div className="row mt-5">
                <input type="text" id="rollNumber" name="roll" onBlur={handleRoll} />
                <button onClick={submitRoll}>Submit</button>
            </div>
        </div>
    );
};

export default DetectStudent;