
const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const jsonPlaceholderAPI = {
  // Users endpoints
  getUsers: async () => {
    const response = await fetch(`${BASE_URL}/users`)
    if (!response.ok) throw new Error('Failed to fetch users')
    return response.json()
  },

  getUser: async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    if (!response.ok) throw new Error('Failed to fetch user')
    return response.json()
  },

  // Posts endpoints
  getPosts: async (page = 1, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    )
    if (!response.ok) throw new Error('Failed to fetch posts')
    return response.json()
  },

  getPostsByUser: async (userId) => {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`)
    if (!response.ok) throw new Error('Failed to fetch user posts')
    return response.json()
  },

  // Search users
  searchUsers: async (query) => {
    const users = await jsonPlaceholderAPI.getUsers()
    return users.filter(user => 
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    )
  }
}

  