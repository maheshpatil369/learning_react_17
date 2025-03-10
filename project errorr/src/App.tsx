import React, { useState } from 'react';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      case 'forgot-password':
        return <ForgotPassword onNavigate={setCurrentPage} />;
      default:
        return <Login onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen animated-background flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="w-full max-w-md animate-fadeIn relative z-10">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;