// src/pages/RegisterPage.jsx
import React, { useState, useEffect } from 'react';
import { FreelanceNest_backend, AuthClient } from '../../src/agent';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Company'); // Default to Company

  useEffect(() => {
    const authenticate = async () => {
      const authClient = await AuthClient.create();
      if (!await authClient.isAuthenticated()) {
        await authClient.login({
          identityProvider: process.env.II_URL,
          onSuccess: () => {
            console.log('User logged in');
          },
        });
      }
    };

    authenticate();
  }, []);

  const registerUser = async () => {
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const result = await FreelanceNest_backend.registerUser(name, { [role]: null }, { agentOptions: { identity } });
    console.log(result);
  };

  return (
    <div>
      <h1>Register User</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Company">Company</option>
        <option value="Freelancer">Freelancer</option>
      </select>
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterPage;
