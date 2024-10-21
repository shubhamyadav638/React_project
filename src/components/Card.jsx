import React from 'react'

function Card() {
  return (
    <div>
       <div className="glass-card max-w-xs p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-30 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-opacity-30">
      <img 
        src="../../public/image/pro.jpg" 
        alt="image not found" 
        className="w-full h-40 object-cover rounded-t-xl mb-4"
      />
      <h2 className="text-2xl font-semibold text-white mb-4">Add New Item</h2>
      <p className="text-white text-opacity-75 mb-6">
        Click the button below to add a new item.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-800 transition-colors duration-300">
        Add
      </button>
    </div>
    </div>
  )
}

export default Card
