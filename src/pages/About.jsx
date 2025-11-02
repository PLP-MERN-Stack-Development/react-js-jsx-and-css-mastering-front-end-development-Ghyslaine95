
import React from 'react'
import Card from '../components/ui/Card'

const About = () => {
  const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces', version: '18.2.0' },
    { name: 'Tailwind CSS', description: 'A utility-first CSS framework', version: '3.2.0' },
    { name: 'React Router', description: 'Declarative routing for React', version: '6.8.0' },
    { name: 'Vite', description: 'Next generation frontend tooling', version: '4.1.0' }
  ]

  const features = [
    'Component-based architecture with reusable UI components',
    'State management using React hooks (useState, useEffect, useContext)',
    'Custom hooks for local storage and API integration',
    'Dark/light theme switching with context API',
    'Responsive design with Tailwind CSS',
    'API integration with JSONPlaceholder',
    'Task management with CRUD operations',
    'Search and filtering capabilities'
  ]

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About TaskFlow
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A modern React application demonstrating best practices and modern web development techniques.
          </p>
        </div>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            TaskFlow is a comprehensive React application built as an assignment to demonstrate 
            proficiency in modern frontend development. It showcases component architecture, 
            state management, API integration, and responsive design.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            The application includes a fully functional task manager, user directory with 
            real API data, and a seamless dark mode experience.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {tech.description}
                </p>
                <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                  v{tech.version}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-gray-600 dark:text-gray-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-green-500 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Assignment Information
          </h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            This project was developed as part of a React.js and Tailwind CSS assignment 
            focusing on component architecture, state management, hooks usage, and API integration.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default About