import React from 'react'

function Cart() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Add to Cart</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="product">
            Product Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="product"
            placeholder="Enter Product Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="quantity"
            placeholder="Enter Quantity"
            min="1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="price"
            placeholder="Enter Price"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </form>
    </div>
  </div>
  )
}

export default Cart
