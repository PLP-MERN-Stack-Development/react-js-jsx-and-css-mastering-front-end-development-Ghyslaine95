import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'User Directory',
      description: 'Browse and search through user data from JSONPlaceholder API.',
      icon: '👥',
      path: '/users'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="text-blue-600 dark:text-blue-400">TaskFlow</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A modern React application built with Tailwind CSS. Manage your tasks, 
            explore user data, and enjoy a seamless dark mode experience.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/tasks">
              <Button size="large">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="large">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button variant="secondary" size="small">
                  Explore
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300">React Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                Tailwind
              </div>
              <div className="text-gray-600 dark:text-gray-300">CSS Framework</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                API
              </div>
              <div className="text-gray-600 dark:text-gray-300">JSONPlaceholder Integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home