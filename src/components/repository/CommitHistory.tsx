import React from 'react';
import { GitCommit, User, Calendar } from 'lucide-react';

interface Commit {
  id: string;
  message: string;
  author: string;
  date: string;
  avatar: string;
}

interface CommitHistoryProps {
  commits: Commit[];
}

export function CommitHistory({ commits }: CommitHistoryProps) {
  return (
    <div className="space-y-4">
      {commits.map((commit) => (
        <div
          key={commit.id}
          className="flex items-start space-x-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors"
        >
          <img
            src={commit.avatar}
            alt={commit.author}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-100 truncate">
              {commit.message}
            </p>
            <div className="mt-1 flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {commit.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {commit.date}
              </div>
              <div className="flex items-center">
                <GitCommit className="h-4 w-4 mr-1" />
                {commit.id.substring(0, 7)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}