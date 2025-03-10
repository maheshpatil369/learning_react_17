import React, { useState } from 'react';
import { AuthCard } from '../components/AuthCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { LogIn } from 'lucide-react';

export const Login: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setError('Invalid email or password');
    setIsLoading(false);
  };

  return (
    <AuthCard>
      <div className="flex items-center justify-center mb-6">
        <LogIn className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
        />
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm animate-shake">
            {error}
          </div>
        )}
        <Button type="submit" isLoading={isLoading}>
          Sign In
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        <button
          onClick={() => onNavigate('forgot-password')}
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{' '}
        <button
          onClick={() => onNavigate('signup')}
          className="text-blue-600 hover:underline"
        >
          Sign Up
        </button>
      </div>
    </AuthCard>
  );
}