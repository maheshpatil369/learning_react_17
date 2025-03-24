import React, { useState } from 'react';
import { AuthCard } from '../components/AuthCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { KeyRound } from 'lucide-react';

export const ForgotPassword: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSubmitted(false);
  };

  return (
    <AuthCard>
      <div className="flex items-center justify-center mb-6">
        <KeyRound className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Button type="submit" isLoading={isLoading}>
            Send Reset Link
          </Button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-600 mb-4">
            Password reset instructions have been sent to your registered email! Your Password is 'Password'😊
          </p>
          <Button variant="secondary" onClick={() => onNavigate('login')}>
            Back to Login
          </Button>
        </div>
      )}
      <div className="mt-4 text-center text-sm">
        Remember your password?{' '}
        <button
          onClick={() => onNavigate('login')}
          className="text-blue-600 hover:underline"
        >
          Sign In
        </button>
      </div>
    </AuthCard>
  );
}