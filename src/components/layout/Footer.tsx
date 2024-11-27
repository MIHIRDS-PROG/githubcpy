import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Github className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">DevHub</span>
            </div>
            <p className="text-sm">
              A platform for developers to collaborate, share, and build amazing things together.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Features</a></li>
              <li><a href="#" className="text-sm hover:text-white">Security</a></li>
              <li><a href="#" className="text-sm hover:text-white">Team</a></li>
              <li><a href="#" className="text-sm hover:text-white">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white">Guides</a></li>
              <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About</a></li>
              <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} DevHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}