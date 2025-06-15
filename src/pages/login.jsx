import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(prev => !prev);

  const onSubmit = (data) => {
    const savedData = localStorage.getItem('user'); // ✅ Fixed key

    if (!savedData) {
      setLoginError('No user found. Please sign up first.');
      return;
    }

    const { email: savedEmail, password: savedPassword } = JSON.parse(savedData);

    if (data.email === savedEmail && data.password === savedPassword) {
      setLoginError('');
      navigate('/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="brand-logo">When I Work</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password*</label>
            <div className="password-field">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
              />
              <span className="toggle" onClick={togglePassword}>
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          {loginError && <div className="alert-box">{loginError}</div>}

          <button type="submit" className="login-button">Log In</button>

          <div className="or-divider">OR</div>

          <div className="social-buttons">
            <button className="google-btn" type="button">Log in with Google</button>
            <button className="apple-btn" type="button">Sign in with Apple</button>
          </div>

          <div className="bottom-links">
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </div>
        </form>

        <div className="footer">Third-Party Connect</div>
      </div>
    </div>
  );
};

export default Login;
