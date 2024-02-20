import React from 'react'


function CardSkeleton() {
  return (
    <div className="m-3 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-600 dark:border-gray-700 animate-pulse">
    <div className="bg-gray-500 h-64 w-80 rounded-t-lg"></div>
    <div className="p-5">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-10 flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  </div>
  )
}

export default CardSkeleton