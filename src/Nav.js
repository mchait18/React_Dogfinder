import React from "react";
import { Link } from "react-router-dom";

function Nav({ name, dogs }) {
    const dog = dogs.filter(dog => (
        dog.name === name))

    return <Link to={{
        pathname: `/dogs/${dog[0].name}`,
        state: { age: dog[0].age, facts: dog[0].facts }
    }}>{dog[0].name}</Link>
}
export default Nav