import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import { showError, showLoading } from '../../utils/messages';
import { login } from '../../api/apiAuth';
import { authenticate, isAuthenticated, userInfo } from '../../utils/auth';

const Login = () => {
    const [values, setValues] = useState({
     
        phone_no:'',
        password: '',
        error: false,
        loading: false,
        disabled: false,
        redirect: false
    });

    const {  phone_no, password, loading, error, redirect, disabled } = values;


    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }





    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true, disabled: true });

        login({ phone_no, password })
            .then(response => {
                authenticate(response.data.token, () => {
                    setValues({
                        email: '',
                        phone_no:'',
                        password: '',
                        success: true,
                        disabled: false,
                        loading: false,
                        redirect: true
                    })
                })
            })
            .catch(err => {
                let errMsg = 'Something went wrong!';
                if (err.response) {
                    errMsg = err.response.data;
                } else {
                    errMsg = 'Something went wrong!';
                }
                setValues({ ...values, error: errMsg, disabled: false, loading: false })
            })
    }

    const signInForm = () => (
        <form onSubmit={handleSubmit}>
  
            <div className="form-group">
                <label className="text-muted">Phone:</label>
                <input name='phone_no' type="phone_no" className="form-control"
                    value={phone_no} required onChange={handleChange} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password:</label>
                <input name="password" type="password" onChange={handleChange} className="form-control"
                    value={password} required />
            </div>
            <button type="submit" className="btn btn-outline-primary" disabled={disabled}>Login</button>
        </form>
    );

    const redirectUser = () => {
        if (redirect) return <Redirect to={`${userInfo().role}/dashboard`} />
        if (isAuthenticated()) return <Redirect to="/" />
    }
    return (
        <div title="Login" className="container col-md-8 offset-md-2">
            {redirectUser()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>Login Here,</h3>
            <hr />
            {signInForm()}
            <hr />
        </div>
    );
}

export default Login;