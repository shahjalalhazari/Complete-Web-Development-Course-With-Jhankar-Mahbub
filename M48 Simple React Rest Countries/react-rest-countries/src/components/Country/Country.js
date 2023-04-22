import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Population: {props.population}</h4>
        </div>
    );
};
export default Country;