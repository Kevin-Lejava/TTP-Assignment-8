import './App.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';
import AccountBalance from './AccountBalance';

function AddDebit(props) {

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [debits, setDebit] = useState([]);

    React.useEffect(() => {
        axios.get("https://moj-api.herokuapp.com/debits").then((response) => {
            setDebit(response.data);
        });
    }, []);

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const addDebit = () => {
        let currDate = new Date();
        const newDebits = [...debits];
        newDebits.unshift({ amount, description, date: currDate });
        setDebit(newDebits);
        props.handleTransaction(amount);
    };

    return (
        <div>
            <Navbar />
            {debits.map((debit, key) => {
                console.log(debit)
                return (
                    <div key={key}>
                        {debit.description}..........{debit.amount}..........{new Date(debit.date).toString()}
                    </div>
                )
            })}

            <label htmlFor="charge-type">Type of Charge:</label>
            <input type="text" description="charge-type" onChange={(e) => onChangeDescription(e)} />
            <label htmlFor="charge-amount">Amount Charged</label>
            <input type="text" description="charge-amount" onChange={(e) => onChangeAmount(e)} />
            {<button type="submit" onClick={() => addDebit()}>Add Charge</button>}
            <AccountBalance accountBalance={props.accountBalance} />
        </div>
    );
}

export default AddDebit;