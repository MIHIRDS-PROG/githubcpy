import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Search, Bell, Menu } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Navbar() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Github className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">DevHub</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/explore" className="hover:text-gray-300">Explore</Link>
                <Link to="/repositories" className="hover:text-gray-300">Repositories</Link>
                <Link to="/issues" className="hover:text-gray-300">Issues</Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {isAuthenticated ? (
              <>
                <Bell className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
                <img
                  src={user?.avatarUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="hover:text-gray-300">Sign in</Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}