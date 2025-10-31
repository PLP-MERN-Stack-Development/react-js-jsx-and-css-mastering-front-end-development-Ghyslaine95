

import React, { useState } from 'react'
import useApi from '../hooks/useApi'
import { jsonPlaceholderAPI } from '../api/jsonPlaceholder'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: users, loading, error, execute: refetchUsers } = useApi(jsonPlaceholderAPI.getUsers)

  const filteredUsers = users?.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  if (loading) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading users...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="text-center">
            <div className="text-red-600 dark:text-red-400 mb-4">
              <p className="text-lg">Error loading users: {error}</p>
            </div>
            <Button onClick={refetchUsers}>Try Again</Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            User Directory
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Browse users from JSONPlaceholder API
          </p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8">
          <Card>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Input
                placeholder="Search users by name, email, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button
                variant="secondary"
                onClick={() => setSearchQuery('')}
                disabled={!searchQuery}
              >
                Clear
              </Button>
            </div>
          </Card>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <Card 
              key={user.id} 
              hover 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {user.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{user.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {user.company.name}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <p>Phone: {user.phone}</p>
                  <p>Website: {user.website}</p>
                  <p>City: {user.address.city}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredUsers.length === 0 && users && (
          <Card className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No users found matching your search criteria.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Users