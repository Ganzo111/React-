import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleReset = () => {
        if (!email) {
            alert("Enter your email");
            return;
        }

        alert("Reset sent to " + email);
        navigate('/');
    };

    return (
        <div className="container mt-5" >
            <NavigationBar />

            <h2>Forgot Password</h2>

            <input
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />


            <button className="btn btn-success w-100" onClick={handleReset}>
                Reset Password
            </button>

            <p className="text-center mt-3">
                <Link to="/">Back</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;