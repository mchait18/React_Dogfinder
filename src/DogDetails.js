import React from "react";
import { useParams, useLocation } from 'react-router-dom';

function DogDetails() {
    const { name } = useParams()
    const location = useLocation()
    const { age, facts } = location.state

    return (
        <div>
            <h3>Dog: {name}</h3>
            <h4>Age: {age}</h4>
            <h4><u>Facts:</u></h4>
            <ul>
                {facts.map(fact => (
                    <li key={fact}>{fact} </li>
                ))}
            </ul>
        </div>
    )
}

export default DogDetails