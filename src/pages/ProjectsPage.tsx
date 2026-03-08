import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-5xl font-bold text-red-500 tracking-tight">Our Projects</h1>
      </div>
      <Projects />
    </div>
  );
}
