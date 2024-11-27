import React from 'react';
import { Plus, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
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

export function DashboardPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Your Repositories</h1>
          </div>
          <Link
            to="/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            New
          </Link>
        </div>

        <div className="grid gap-6">
          {mockRepositories.map((repo) => (
            <RepositoryCard key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
}