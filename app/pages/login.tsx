
import React from 'react';
import LoginForm from '../../components/LoginForm'; // Import the Login Form component
import axios from 'axios'; // Use Axios or another library for API calls


const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Send a POST request to your authentication endpoint with email and password
    axios.post('/api/login', { email, password })
      .then((response) => {
        // Handle successful login (e.g., store token in local storage)
      })
      .catch((error) => {
        // Handle login error (e.g., show error message)
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
