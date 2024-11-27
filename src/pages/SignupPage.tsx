import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/auth/AuthForm';
import { useAuthStore } from '../store/authStore';

export function SignupPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = (data: { email: string; password: string; username: string }) => {
    // TODO: Implement actual signup logic
    console.log('Signup:', data);
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
}