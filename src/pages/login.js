import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../components/nav-bar';
import { useAuth } from '../contexts/auth-context';
import axios from "axios";
import { SnackBar } from '../components/snack-bar';
import { useData } from '../contexts/data-context';

export const Login = () => {
    const { updateAuth, setUser } = useAuth();
    const { error, setError } = useData();
    const [credential, setCredential] = useState({ email: undefined, password: undefined });
    const [isRemeberMe, setRemeberMe] = useState();
    const navigate = useNavigate();

    function inputChangeHandler(e, type) {
        const value  = e.target.value;
        setCredential({...credential, [type]: value});
    }

    function checkboxChangedHandler() {
        setRemeberMe((value) => !value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(credential) {
            try {
                const response =  await axios.post("api/auth/login", {
                    email: credential.email,
                    password: credential.password
                });

                if(response.status === 200) {
                    updateAuth(response.data.encodedToken, true);
                    if(isRemeberMe) {
                        localStorage.setItem("token", response.data.encodedToken);
                    }
                    setUser(response.data.foundUser);
                }
            } catch(e) {
                console.error(e);
                setCredential({ email: "", password: "" });
                setError(e.response.data['errors']);
            }
        }
    }

    const navigateToRegister = () => navigate("/register");
    return (
        <div>
            <Navbar/>
            <div className="main-content register-container">
                <div className="register">
                    <div className="header">
                        Login
                    </div>
                    <form className="register-content" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label className="input-label">Email address</label>
                            <div className="form-control">
                                <input type="text" className="input" placeholder="example@example.com" value={credential.email} onChange={(e) => inputChangeHandler(e, "email")} required/>
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="input-label">Password</label>
                            <div className="form-control">
                                <input type="password" className="input" placeholder="******" value={credential.password} onChange={(e) => inputChangeHandler(e, "password")} required/>
                            </div>
                        </div>
                        <div className="form-field-section">
                            <div className="form-field form-field-horizontal font-md">
                                <label className="form-control-horizontal">
                                    <input type="checkbox" value={isRemeberMe} onClick={checkboxChangedHandler}/>
                                    <span className="input-label">Remember me</span>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-full product-btn bg-secondary white p-md font-bold" type="submit">Login</button> 
                        <button onClick={navigateToRegister} className="btn btn-full product-btn bg-tertiary charcoal-black p-md font-bold">Create New Account </button> 
                    </form>
                </div>
            </div>
            { error && <SnackBar/> }
        </div>
    );
}