import React from 'react';
import { Link } from 'react-router-dom';
import { Star, GitFork } from 'lucide-react';

interface RepositoryCardProps {
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
}

export function RepositoryCard({
  id,
  name,
  description,
  stars,
  forks,
  language,
  updatedAt,
}: RepositoryCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <Link to={`/repository/${id}`} className="text-xl font-semibold text-blue-400 hover:text-blue-300">
          {name}
        </Link>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1" />
            {stars}
          </div>
          <div className="flex items-center">
            <GitFork className="h-4 w-4 mr-1" />
            {forks}
          </div>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-400">
        <span className="mr-4">{language}</span>
        <span>Updated {updatedAt}</span>
      </div>
    </div>
  );
}