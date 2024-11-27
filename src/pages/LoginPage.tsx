import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/auth/AuthForm';
import { useAuthStore } from '../store/authStore';

export function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (data: { email: string; password: string }) => {
    // TODO: Implement actual login logic
    console.log('Login:', data);
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}