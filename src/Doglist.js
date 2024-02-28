import React from "react";
import { Link } from "react-router-dom";

function Doglist({ dogs }) {
    return (
        <div>
            <h1>Welcome to our Dogs!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.src}>
                        <Nav dogs={dogs} name={dog.src} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Nav({ name, dogs }) {
    const dog = dogs.filter(dog => (
        dog.src === name))

    return <Link to={{
        pathname: `/dogs/${dog[0].src}`,
        state: { age: dog[0].age, facts: dog[0].facts }
    }}>{dog[0].name}</Link>
}

export default Doglist