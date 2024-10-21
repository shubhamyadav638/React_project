import React from 'react'

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-500 p-4 flex flex-col">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 mb-6 max-w-full">
        <h1 className="text-4xl font-bold text-white text-center">Dashboard</h1>
      </div>

      <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li className="text-white hover:text-blue-300 transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="text-white hover:text-blue-300 transition-colors">
              <a href="#profile">Profile</a>
            </li>
            <li className="text-white hover:text-blue-300 transition-colors">
              <a href="#settings">Settings</a>
            </li>
            <li className="text-white hover:text-blue-300 transition-colors">
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome, User!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-white mb-2">Card 1</h3>
              <p className="text-white">Some content here.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-white mb-2">Card 2</h3>
              <p className="text-white">Some content here.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-white mb-2">Card 3</h3>
              <p className="text-white">Some content here.</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
