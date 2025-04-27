
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-12">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div>
            <Link 
              to="/" 
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Go back to home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
