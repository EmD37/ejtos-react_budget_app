import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch } = useContext(AppContext);
    let { currency } = useContext(AppContext);

    const updateCurrency = (val) => {
        console.log(currency);

        currency = val;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    return (
        <div className='alert alert-success' style={{backgroundColor: "#84ee87"}}>
            <label htmlFor="inputGroupSelectCurrencies" style={{color: "white"}}>Currency </label>
            <select className="custom-select" id="inputGroupSelectCurrencies" 
            onChange={(e) => {
                updateCurrency(e.target.value); 
            }} 
            style={{backgroundColor: "#84ee87", borderWidth: "1px", borderColor: "#84ee87", color: "white"}}
            >
                <option defaultValue={currency} disabled hidden></option>
                <option value="£" style={{color: "black"}}>(£ Pound)</option>
                <option value="$" style={{color: "black"}}>($ Dollar)</option>
                <option value="€" style={{color: "black"}}>(€ Euro)</option>
                <option value="₹" style={{color: "black"}}>(₹ Ruppee)</option>
            </select>
        </div>
    );
};

export default Currency;