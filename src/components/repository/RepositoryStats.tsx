import React from 'react';
import { Star, GitFork, Eye, GitBranch, GitPullRequest, CircleDot } from 'lucide-react';
import { Badge } from '../shared/Badge';

interface RepositoryStatsProps {
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  pullRequests: number;
  lastUpdated: string;
  language: string;
}

export function RepositoryStats({
  stars,
  forks,
  watchers,
  openIssues,
  pullRequests,
  lastUpdated,
  language,
}: RepositoryStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-sm font-medium">Stars</span>
          </div>
          <span className="text-lg font-bold">{stars}</span>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GitFork className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium">Forks</span>
          </div>
          <span className="text-lg font-bold">{forks}</span>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Eye className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm font-medium">Watchers</span>
          </div>
          <span className="text-lg font-bold">{watchers}</span>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CircleDot className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-sm font-medium">Issues</span>
          </div>
          <span className="text-lg font-bold">{openIssues}</span>
        </div>
      </div>

      <div className="col-span-2 md:col-span-4 flex items-center justify-between bg-gray-800/30 rounded-lg p-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
            <span className="text-sm">{language}</span>
          </div>
          <div className="flex items-center">
            <GitPullRequest className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-sm">{pullRequests} pull requests</span>
          </div>
          <div className="flex items-center">
            <GitBranch className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-sm">Updated {lastUpdated}</span>
          </div>
        </div>
        <Badge variant="info" size="sm">Active</Badge>
      </div>
    </div>
  );
}