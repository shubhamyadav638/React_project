import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl w-full mx-4">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">About Us</h2>
        <p className="text-white text-lg mb-4">
          Welcome to our company! We are dedicated to providing the best services and products to our customers. Our team of professionals works tirelessly to innovate and improve, ensuring that we stay at the forefront of the industry.
        </p>
        <p className="text-white text-lg mb-4">
          With a commitment to excellence and a passion for what we do, we have established ourselves as leaders in our field. Our mission is to deliver value, quality, and satisfaction to every client we serve.
        </p>
        <p className="text-white text-lg">
          Thank you for choosing us. We look forward to building a lasting relationship with you and helping you achieve your goals.
        </p>
      </div>
    </div>
  )
}

export default About
