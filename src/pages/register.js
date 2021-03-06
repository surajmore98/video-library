import { useState } from 'react';
import { Navbar } from '../components/nav-bar';
import { useAuth } from '../contexts/auth-context';
import { SnackBar } from '../components/snack-bar';
import { useData } from '../contexts/data-context';
import { register } from '../service/auth-service';
import { ResponseCode } from '../utility/status-code';
import { useNavigator } from '../utility/navigate';
import { HOME, LOGIN } from '../utility/route-variables';

export const Register = () => {
    const { updateAuth, setUser } = useAuth();
    const { error, setError } = useData();
    const [credential, setCredential] = useState({ email: "", password: "", firstName: "", lastName: "" });
    const navigateTo = useNavigator();

    function inputChangeHandler(e, type) {
        const value  = e.target.value;
        setCredential({...credential, [type]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(credential) {
            try {
                const response =  await register(credential);
                if(response.status === ResponseCode.CREATED) {
                    updateAuth(response.data.encodedToken, true);
                    setUser(response.data.createdUser);
                    navigateTo(HOME);
                }
            } catch(e) {
                console.error(e);
                setCredential({ email: "", password: "" });
                setError(e.response.data['errors']);
            }
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="main-content register-container">
                <div className="register">
                    <div className="header">
                        Register
                    </div>
                    <form className="register-content" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label className="input-label">First Name</label>
                            <div className="form-control">
                                <input type="text" className="input" placeholder="enter your first name" value={credential.firstName} onChange={(e) => inputChangeHandler(e, "firstName")} required/>
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="input-label">Last Name</label>
                            <div className="form-control">
                                <input type="text" className="input" placeholder="enter your last name" value={credential.lastName} onChange={(e) => inputChangeHandler(e, "lastName")} required/>
                            </div>
                        </div>
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
                            <div className="form-field form-field-horizontal">
                                <label className="form-control-horizontal font-md">
                                    <input type="checkbox" name="Label" value="Label" required/>
                                    <span className="input-label register-checkbox-label">I accept all Term & Conditions</span>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-full product-btn bg-secondary white p-md font-bold" type="submit">Create New Account</button> 
                        <button onClick={() => navigateTo(LOGIN)} className="btn btn-full product-btn bg-tertiary charcoal-black p-md font-bold">Already have an Account</button> 
                    </form>
                </div>
            </div>
            { error && <SnackBar/> }
        </div>
    );
}