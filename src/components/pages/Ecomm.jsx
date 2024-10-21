import React from 'react'

function Ecomm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-lg w-full mx-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Checkout</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="address">
              Shipping Address
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2" htmlFor="card">
              Credit Card Number
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="card"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="expiry">
                Expiry Date
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="expiry"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2" htmlFor="cvc">
                CVC
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="cvc"
                placeholder="CVC"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  )
}

export default Ecomm
