import React from 'react'

function ProductDetailSkeleton() {
  return (
    <main>
              <section>
      <div className="mt-10 mb-5 bg-gray-300 dark:bg-gray-500 h-8 animate-pulse"></div>
      <div className="mb-5 bg-gray-300 dark:bg-gray-500 h-4 animate-pulse"></div>
      <div className="flex flex-wrap justify-around">
        <div className="max-w-md my-3">
          <div className="bg-gray-300 dark:bg-gray-500 h-64 rounded animate-pulse"></div>
        </div>
        <div className="max-w-xl my-3">
          <div className="bg-gray-300 dark:bg-gray-500 h-8 w-20 mb-3 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-6 w-36 mb-4 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-6 w-20 my-3 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-6 w-28 my-3 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-6 w-36 my-3 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-8 w-28 mb-4 animate-pulse"></div>
          <div className="bg-gray-300 dark:bg-gray-500 h-24 w-96 animate-pulse"></div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default ProductDetailSkeleton