import React, { useContext, useState } from 'react';
import { AppContext, useDebounce } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);

    const[workingBudget, setWorkingBudget] = useState(budget);

    const updateBudget = () => {
        console.log("enter updateBudget");
        console.log(budget);
        console.log(workingBudget);
        if (workingBudget > 20000) {
            alert("The budget cannot exceed £20,000");
            setWorkingBudget(budget);
            return;
        }
        if (workingBudget < budget - remaining) {
            console.log("should reset")
            console.log(budget);
            console.log(workingBudget);
            alert("The budget must exceed expenses: £" + (budget - remaining));
            setWorkingBudget(budget);
            return;
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: workingBudget,
            });
        }
    }

    const debounceOnChange = useDebounce(updateBudget, 1000);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    id='budget'
                    step='10'
                    value={workingBudget}
                    style={{ size: 10 }}
                    onChange={
                        (e) => {
                            debounceOnChange();
                            setWorkingBudget(e.target.value);
                        }
                    }
                >
                </input>              
            </span>
        </div>
    );
}

export default Budget;