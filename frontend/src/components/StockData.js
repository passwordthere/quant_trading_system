import React, { useState, useEffect } from 'react';
import { getStockData } from '../services/api';

const StockData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getStockData().then(response => {
            setData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Stock Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.trade_date}: {item.close}</li>
                ))}
            </ul>
        </div>
    );
};

export default StockData;
