import './App.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import AccountBalance from './AccountBalance';
import axios from 'axios';

function AddCredit(props) {

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [credit, setCredit] = useState([]);

    React.useEffect(() => {
        axios.get("https://moj-api.herokuapp.com/credits").then((response) => {
            setCredit(response.data);
        });
    }, []);

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value);
    }

    const addCredit = () => {
        let currDate = new Date();
        const newCredits = [...credit];
        newCredits.unshift({ amount, description, date: currDate });
        setCredit(newCredits);
        props.handleTransaction(amount / -1);
    };

    return (
        <div>
            <Navbar />
            {credit.map((credit, key) => {
                return (

                    <div key={key}>
                        {credit.description}..........{credit.amount}..........{new Date(credit.date).toString()}
                    </div>
                )
            })}

            <label htmlFor="credit-type">Type of credit:</label>
            <input type="text" description="credit-type" onChange={(e) => onChangeDescription(e)} />
            <label htmlFor="credit-amount">Amount credit</label>
            <input type="text" description="credit-amount" onChange={(e) => onChangeAmount(e)} />
            {<button type="submit" onClick={() => addCredit()}>Add credit</button>}
            <AccountBalance accountBalance={props.accountBalance} />
        </div>
    );
}

export default AddCredit;