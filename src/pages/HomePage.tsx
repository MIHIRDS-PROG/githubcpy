import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Code, GitBranch, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Github className="h-20 w-20 mx-auto mb-8" />
          <h1 className="text-5xl font-bold mb-6">
            Where Code Comes Together
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            DevHub is the platform where developers collaborate, share ideas, and build the future of software together.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign up for free
            </Link>
            <Link
              to="/explore"
              className="bg-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Explore projects
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Code className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">Powerful Code Hosting</h3>
              <p className="text-gray-300">
                Host your code with advanced version control and collaboration features.
              </p>
            </div>
            <div className="text-center">
              <GitBranch className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-gray-300">
                Integrate with your favorite tools and streamline your workflow.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">Global Community</h3>
              <p className="text-gray-300">
                Connect with developers from around the world and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Trending Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${1570295999919 + i}-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80`}
                  alt="Project"
                  className="h-10 w-10 rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Project Name {i}</h3>
                  <p className="text-sm text-gray-400">by Developer {i}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                A brief description of this amazing project and what makes it special.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-4">⭐️ 1.{i}k</span>
                <span>🔄 {i}00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}