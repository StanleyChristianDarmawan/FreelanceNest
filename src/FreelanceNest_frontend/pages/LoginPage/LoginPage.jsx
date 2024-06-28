// src/pages/LoginPage.jsx
import React, { useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const LoginPage = () => {
  useEffect(() => {
    const authenticate = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        console.log('User is authenticated');
      } else {
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

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default LoginPage;
