import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = useState('user');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username,
          password,
          email,
          fullName,
          dateOfBirth,
          address,
          phoneNumber,
          userType
        }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setShowErrorMessage(true);
    }
  }

  function onChangeUsernameHandler(event) {
    setUsername(event.target.value);
  }

  function onChangePasswordHandler(event) {
    setPassword(event.target.value);
  }

  function onChangeEmailHandler(event) {
    setEmail(event.target.value);
  }

  function onChangeFullNameHandler(event) {
    setFullName(event.target.value);
  }

  function onChangeDateOfBirthHandler(event) {
    setDateOfBirth(event.target.value);
  }

  function onChangeAddressHandler(event) {
    setAddress(event.target.value);
  }

  function onChangePhoneNumberHandler(event) {
    setPhoneNumber(event.target.value);
  }

  function onChangeUserTypeHandler(event) {
    setUserType(event.target.value);
  }

  return (
    <div className="container">
      <Card className="w-50 container bg-light">
        <Card.Body>
          <h1 className='m-4'>Register</h1>

          {showErrorMessage && <div>Registration failed. Please try again.</div>}

          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={username} onChange={onChangeUsernameHandler} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={onChangePasswordHandler} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={onChangeEmailHandler} />
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" value={fullName} onChange={onChangeFullNameHandler} />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" className="form-control" value={dateOfBirth} onChange={onChangeDateOfBirthHandler} />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" value={address} onChange={onChangeAddressHandler} />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" value={phoneNumber} onChange={onChangePhoneNumberHandler} />
              </div>

              {/* <div className="form-group">
                <label>User Type</label>
                <select className="form-control" value={userType} onChange={onChangeUserTypeHandler}>
                  <option value="">Select User Type</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                </select>
              </div> */}

              <button className="btn btn-primary mt-3" type="submit">Register</button>
            </div>
          </form>

          <p className='mt-3'>Already have an account? <Link to='/login'>Login</Link></p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
