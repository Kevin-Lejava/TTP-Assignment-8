import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import UserProfile from './UserProfile';
import LogIn from './Login';
import AddDebit from './AddDebit';
import AddCredit from './AddCredit';

function App() {

  const [accountBalance, setAccountBalance] = useState(1500)
  const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })

  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser }
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
  }

  const handleTransaction = (amount) => {
    setAccountBalance(accountBalance - amount);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home accountBalance={accountBalance} />} />
          <Route path="/UserProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
          <Route path="/AddDebit" element={<AddDebit handleTransaction={(amount) => handleTransaction(amount)} accountBalance={accountBalance} />} />
          <Route path="/AddCredit" element={<AddCredit handleTransaction={(amount) => handleTransaction(amount)} accountBalance={accountBalance} />} />
          <Route path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;