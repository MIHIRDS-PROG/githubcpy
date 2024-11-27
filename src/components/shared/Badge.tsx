import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
}

export function Badge({ 
  children, 
  variant = 'default',
  size = 'md'
}: BadgeProps) {
  const variants = {
    default: 'bg-gray-700 text-gray-100',
    success: 'bg-green-900 text-green-100',
    warning: 'bg-yellow-900 text-yellow-100',
    error: 'bg-red-900 text-red-100',
    info: 'bg-blue-900 text-blue-100',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}