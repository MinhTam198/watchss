import React from 'react';

const PriceComponent = ({ price }) => {
    return (
        <div className="price">
            <h2>Price: ${price}</h2>
        </div>
    );
};

export default PriceComponent;