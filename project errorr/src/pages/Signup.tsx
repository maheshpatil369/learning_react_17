import React, { useState } from 'react';
import { AuthCard } from '../components/AuthCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { UserPlus } from 'lucide-react';

export const Signup: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    onNavigate('login');
  };

  return (
    <AuthCard>
      <div className="flex items-center justify-center mb-6">
        <UserPlus className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          required
        />
        <Button type="submit" isLoading={isLoading}>
          Sign Up
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{' '}
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