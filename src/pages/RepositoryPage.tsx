import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, GitFork, Eye, Code } from 'lucide-react';
import { FileExplorer } from '../components/repository/FileExplorer';

const mockFiles = [
  {
    name: 'src',
    type: 'directory' as const,
    children: [
      { name: 'components', type: 'directory' as const, children: [
        { name: 'Button.tsx', type: 'file' as const },
        { name: 'Card.tsx', type: 'file' as const },
      ]},
      { name: 'App.tsx', type: 'file' as const },
      { name: 'index.tsx', type: 'file' as const },
    ],
  },
  {
    name: 'public',
    type: 'directory' as const,
    children: [
      { name: 'index.html', type: 'file' as const },
      { name: 'favicon.ico', type: 'file' as const },
    ],
  },
  { name: 'package.json', type: 'file' as const },
  { name: 'README.md', type: 'file' as const },
];

export function RepositoryPage() {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);

  const handleFileSelect = (path: string) => {
    setSelectedFile(path);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold flex items-center">
              <Code className="h-8 w-8 mr-3" />
              awesome-project
            </h1>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800">
                <Star className="h-5 w-5 mr-2" />
                Star
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800">
                <GitFork className="h-5 w-5 mr-2" />
                Fork
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              123 stars
            </div>
            <div className="flex items-center">
              <GitFork className="h-4 w-4 mr-1" />
              45 forks
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              789 watchers
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FileExplorer files={mockFiles} onSelect={handleFileSelect} />
          </div>
          <div className="lg:col-span-3">
            {selectedFile ? (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{selectedFile}</h3>
                <pre className="text-sm text-gray-300">
                  {/* Mock file content */}
                  // File content would be displayed here
                </pre>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">README.md</h2>
                <div className="prose prose-invert">
                  <h1>Awesome Project</h1>
                  <p>This is a sample repository to demonstrate the file explorer and repository view.</p>
                  <h2>Features</h2>
                  <ul>
                    <li>File explorer with directory tree</li>
                    <li>File content viewer</li>
                    <li>Repository statistics</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}