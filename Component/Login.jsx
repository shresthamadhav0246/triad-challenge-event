import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();



  async function handleSubmit(event) {
    event.preventDefault();



    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('userData', JSON.stringify(userData));

        if (email === "admin@gmail.com" && password === "admin") {
          navigate('/admin');
        } else {
          navigate('/register/user-information');
        }
      } else {
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowErrorMessage(true);
    }
  }

  function onChangeUsernameHandler(event) {
    setEmail(event.target.value);
  }

  function onChangePasswordHandler(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="container">
      <Card className="w-50 container bg-light">
        <Card.Body>
          <h1 className='m-4'>Login</h1>

          {showErrorMessage && <div>Authentication failed. Please check credentials.</div>}

          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="m-3">
                <label className='p-2'>Username</label>
                <input type="text" name="email" value={email} onChange={onChangeUsernameHandler} />
              </div>

              <div className="m-3">
                <label className='p-2'>Password</label>
                <input type="password" name="password" value={password} onChange={onChangePasswordHandler} />
              </div>

              <button className="btnLogin m-4" type="submit">Login</button>
            </div>
          </form>

          <p className=''>Do you have account? <Link to='/register'>Register</Link></p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
