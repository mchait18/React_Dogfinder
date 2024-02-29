import React from "react";
import Nav from "./Nav";

function Doglist({ dogs }) {
    return (
        <div>
            <h1>Welcome to our Dogs!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <Nav dogs={dogs} name={dog.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Doglist