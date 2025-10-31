
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ✅ React App Working!
        </h1>
        <p className="text-gray-600 mb-6">
          If you can see this, your React app is successfully deployed on Netlify!
        </p>
        
        <div className="space-y-3">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Deployment Successful!
          </div>
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            Tailwind CSS is working!
          </div>
          <div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded">
            Ready to add features
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Next: Add routing and your components
        </p>
      </div>
    </div>
  )
}

export default App
