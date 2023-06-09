import React, { useEffect } from 'react';

export const DisplayComponent = (props) => {

    const title = "props.brand";
    const img = "props.filepath";
    const description = "props.description";
    const price = "props.price";
    const inStock = "props.number";

    return (
        <div>
            Display Page
            
            <h1>{title}</h1>
            <h1>{img}</h1>
            <h1>About the sauce:{description}</h1>
            <h1>{price}</h1>
            <h1>Number in Stock: {inStock}</h1>
            
            </div>
 
    )
}