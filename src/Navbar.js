import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/" className="btn btn-secondary">Home</Link>
            <Link to="/UserProfile" className="btn btn-secondary">User Profile</Link>
            <Link to="/AddDebit" className="btn btn-secondary">Add Debit</Link>
            <Link to="/AddCredit" className="btn btn-secondary">Add Credit</Link>
            <Link to="/Login" className="btn btn-secondary">Log in</Link>
        </div>
    );
}

export default Navbar;
