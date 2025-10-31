// src/components/tasks/TaskItem.jsx
import React from 'react'
import Button from '../ui/Button'

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 animate-fade-in">
      <div className="flex items-center space-x-3 flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <div className="flex-grow">
          <span
            className={`text-lg font-medium ${
              task.completed
                ? 'line-through text-gray-500 dark:text-gray-400'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {task.text}
          </span>
          {task.createdAt && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      <Button
        variant="danger"
        size="small"
        onClick={() => onDelete(task.id)}
        className="ml-4"
      >
        Delete
      </Button>
    </div>
  )
}

export default TaskItem
