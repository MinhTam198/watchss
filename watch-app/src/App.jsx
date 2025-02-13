
import React, { useState, useEffect } from 'react';
import NameComponent from './components/NameComponent';
import SizeComponent from './components/SizeComponent';
import PriceComponent from './components/PriceComponent';
import ImagesComponent from './components/ImagesComponent';
import './styles/App.css';

const App = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('/watchs.json')  // Đường dẫn tính từ thư mục `public/`
            .then(response => response.json())
            .then(data => setWatches(data))
            .catch(error => console.error("Lỗi tải JSON:", error));
    }, []);

    return (
        <div className="container">
            <h1>WATCH STORE</h1>
            <div className="grid-container">
                {watches.map((watch, index) => (
                    <div key={index} className="grid-item">
                        <ImagesComponent images={watch.images} />
                        <NameComponent name={watch.name} />
                        <SizeComponent size={watch.size} />
                        <PriceComponent price={watch.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};




export default App;
