import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, LogIn, ArrowLeft, User } from 'lucide-react';

type Page = 'login' | 'forgot-password' | 'signup';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate wrong password for demo
    setError('Invalid email or password. Please try again.');
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    alert('Password reset link sent to your email!');
    setCurrentPage('login');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    alert('Account created successfully!');
    setCurrentPage('login');
  };

  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderLoginPage = () => (
    <motion.div {...pageTransition}>
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <LogIn className="w-12 h-12 mx-auto text-blue-500 mb-4" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Please sign in to your account</p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Email address"
            required
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Password"
            required
          />
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <button
              type="button"
              onClick={() => setCurrentPage('forgot-password')}
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Sign in
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={() => setCurrentPage('signup')}
          className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
        >
          Sign up
        </button>
      </p>
    </motion.div>
  );

  const renderForgotPasswordPage = () => (
    <motion.div {...pageTransition}>
      <button
        onClick={() => setCurrentPage('login')}
        className="flex items-center text-blue-500 mb-8 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to login
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Reset Password</h2>
        <p className="text-gray-600 mt-2">Enter your email to reset your password</p>
      </div>

      <form onSubmit={handleForgotPassword} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email address"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Reset Link
        </motion.button>
      </form>
    </motion.div>
  );

  const renderSignupPage = () => (
    <motion.div {...pageTransition}>
      <button
        onClick={() => setCurrentPage('login')}
        className="flex items-center text-blue-500 mb-8 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to login
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-600 mt-2">Sign up for a new account</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Full name"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email address"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Password"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Account
        </motion.button>
      </form>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >
        {currentPage === 'login' && renderLoginPage()}
        {currentPage === 'forgot-password' && renderForgotPasswordPage()}
        {currentPage === 'signup' && renderSignupPage()}
      </motion.div>
    </div>
  );
}

export default App;