import React from 'react';
import { Folder, FileText, ChevronRight, ChevronDown } from 'lucide-react';

interface FileNode {
  name: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

interface FileExplorerProps {
  files: FileNode[];
  onSelect: (path: string) => void;
}

function FileTreeNode({ node, path = '', onSelect }: { node: FileNode; path?: string; onSelect: (path: string) => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const fullPath = `${path}/${node.name}`;

  if (node.type === 'file') {
    return (
      <div
        className="flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => onSelect(fullPath)}
      >
        <FileText className="h-4 w-4 mr-2 text-gray-400" />
        <span className="text-sm">{node.name}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 mr-2" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-2" />
        )}
        <Folder className="h-4 w-4 mr-2 text-blue-400" />
        <span className="text-sm">{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <FileTreeNode
              key={index}
              node={child}
              path={fullPath}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileExplorer({ files, onSelect }: FileExplorerProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      {files.map((file, index) => (
        <FileTreeNode key={index} node={file} onSelect={onSelect} />
      ))}
    </div>
  );
}