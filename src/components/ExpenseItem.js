import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem =  (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td style={{paddingTop: "0.5rem", lineHeight: "1.3rem"}}>
            <button 
                onClick={event=> increaseAllocation(props.name)}
                style={{
                    borderRadius: "15px",
                    width: "30px",
                    height: "30px",
                    color: "white",
                    backgroundColor: "#1bb044",
                    fontSize: "20px"
                }}
            >
            <b style={{position: "relative", left: "-7px", top: "-3px", fontSize: "40px"}}>+</b>
            </button>
        </td>
        <td>
            <button 
                onClick={event=> decreaseAllocation(props.name)}
                style={{
                    borderRadius: "15px",
                    width: "30px",
                    height: "30px",
                    color: "white",
                    backgroundColor: "#e21919",
                    fontSize: "20px"
                }}
            >
            <b style={{position: "relative", left: "-3px", top: "-29px", fontSize: "xxx-large"}}>-</b>
            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
