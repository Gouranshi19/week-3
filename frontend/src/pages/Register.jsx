import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
        await axios.post("http://127.0.0.1:8000/api/register/", {
            username,
            password,
        });
        alert("Registration Successful! Please login.");
        navigate("/login");
        } catch (error) {
        alert("Registration failed. Username may already exist.");
        }
    };

    return (
        <div>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />
            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />
            <button type="submit">Register</button>
        </form>
        </div>
    );
}

export default Register;