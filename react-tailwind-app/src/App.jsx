

import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <span className="text-xl font-bold text-blue-600">TaskFlow</span>
              <div className="flex space-x-4">
                <a href="#/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#/tasks" className="text-gray-700 hover:text-blue-600">Tasks</a>
                <a href="#/users" className="text-gray-700 hover:text-blue-600">Users</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4">
          <Routes>
            <Route path="/" element={
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">🎉 Home Page</h1>
                <p className="text-gray-600">Your React app is working!</p>
              </div>
            } />
            <Route path="/tasks" element={
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">📝 Tasks Page</h1>
                <p className="text-gray-600">Task management will be here.</p>
              </div>
            } />
            <Route path="/users" element={
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">👥 Users Page</h1>
                <p className="text-gray-600">User data will be here.</p>
              </div>
            } />
            <Route path="*" element={
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">❌ 404</h1>
                <p className="text-gray-600">Page not found</p>
                <a href="#/" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Go Home
                </a>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App