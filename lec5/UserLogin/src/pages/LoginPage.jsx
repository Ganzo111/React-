import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        if (!email) {
            alert("Enter email");
            return;
        }

        navigate('/dashboard');
    };

    return (
        <div className="container mt-5">
            <NavigationBar />

            <h2>Login</h2>

            <input
                className="form-control mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-primary w-100" onClick={handleLogin}>
                Login
            </button>

            <p className="text-center mt-3">
                <Link to="/forgot">Forgot Password?</Link>
            </p>
        </div>
    );
};

export default LoginPage;