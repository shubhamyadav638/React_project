import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-white text-sm mt-4">
        Already have an account? <a href="#" className="underline"><Link to='/signin' >Log In</Link></a>
      </p>
    </div>
  </div>
  )
}

export default Signup
