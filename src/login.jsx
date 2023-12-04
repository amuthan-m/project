import React, { useState } from 'react';
import './int.css';
import { useNavigate } from 'react-router-dom';

export default function Inter() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const home = (event) => {
    event.preventDefault();

    // Hardcoded user credentials
    const validUsers = [
      { email: 'user1@example.com', password: 'pass1' },
      { email: 'user2@example.com', password: 'pass2' },
    ];

    const foundUser = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      nav('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const Sign = () => {
    nav('/SignUp');
  };

  return (
    <div>
    <header class="header" >
    <a href="#" class="logo" >
      <ion-icon name="rose"></ion-icon> BURN FIT
    </a>

    <nav class="nav">
      <a onClick={home}>HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">MENU</a>
      <a href="#">REVIEW</a>
      <a href="#">CONTACT</a>
    </nav>
  </header>

      <section className="home">
        <div className="content">
        </div>
        <div className="wrapper-login">
          <h2>Member login</h2>
          <form onSubmit={home}>
            <div className="input-box">
              <span className="icon">
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Enter your email</label>
            </div>

            <div className="input-box">
              <span className="icon">
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Enter your password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#"> Forgot password</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="register-link"></div>
            <p>
              Not a Member?<a onClick={Sign}>Sign up Now</a>
            </p>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
