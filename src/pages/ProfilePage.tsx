import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Link as LinkIcon, Calendar, Users } from 'lucide-react';
import { RepositoryCard } from '../components/dashboard/RepositoryCard';

const mockRepositories = [
  {
    id: '1',
    name: 'awesome-project',
    description: 'A collection of awesome things.',
    stars: 120,
    forks: 45,
    language: 'TypeScript',
    updatedAt: '2 days ago',
  },
  {
    id: '2',
    name: 'react-components',
    description: 'Reusable React components with TypeScript and Tailwind CSS.',
    stars: 89,
    forks: 23,
    language: 'TypeScript',
    updatedAt: '5 days ago',
  },
];

export function ProfilePage() {
  const { username } = useParams();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt={username}
                className="w-full rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
              <p className="text-gray-300">
                Building awesome things with TypeScript, React, and Node.js.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    https://example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined March 2024
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="font-medium">123</span>
                  <span className="ml-1 text-gray-400">followers</span>
                </div>
                <div>
                  <span className="font-medium">45</span>
                  <span className="ml-1 text-gray-400">following</span>
                </div>
              </div>
            </div>
          </div>

          {/* Repository List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Popular Repositories</h2>
              <div className="grid gap-6">
                {mockRepositories.map((repo) => (
                  <RepositoryCard key={repo.id} {...repo} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Contribution Activity</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                {/* Contribution graph would go here */}
                <div className="h-32 flex items-center justify-center text-gray-400">
                  Contribution graph placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}