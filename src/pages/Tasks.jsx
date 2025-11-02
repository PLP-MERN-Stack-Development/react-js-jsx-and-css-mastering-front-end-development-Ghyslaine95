
import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import TaskList from '../components/tasks/TaskList'
import TaskFilter from '../components/tasks/TaskFilter'

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim() === '') return

    const task = {
      id: Date.now().toString(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }

    setTasks(prev => [...prev, task])
    setNewTask('')
  }

  const toggleTask = (taskId) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed
      case 'completed':
        return task.completed
      default:
        return true
    }
  })

  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task Manager
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay organized and boost your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {totalCount}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Tasks</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {completedCount}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Completed</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {totalCount - completedCount}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Pending</div>
          </Card>
        </div>

        <Card className="mb-8">
          <form onSubmit={addTask} className="flex gap-4">
            <Input
              placeholder="Enter a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" disabled={!newTask.trim()}>
              Add Task
            </Button>
          </form>
        </Card>

        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        <Card>
          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </Card>

        {tasks.length === 0 && (
          <Card className="text-center mt-8">
            <div className="text-gray-500 dark:text-gray-400">
              <p className="text-lg mb-4">No tasks yet! Get started by adding your first task above.</p>
              <p className="text-sm">Try adding: "Complete React assignment"</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Tasks