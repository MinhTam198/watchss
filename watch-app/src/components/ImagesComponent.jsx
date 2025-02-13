import React from 'react';

const ImagesComponent = ({ images }) => {
    return (
        <div>
            <img src={images[0]} alt="Watch" />
        </div>
    );
};

export default ImagesComponent;