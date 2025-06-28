import React from 'react'
import Footer from './Footer'
export const Contact = () => {
  return (
    <div className='flex-row'>
 <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-5 space-y-10">
      <h1 className="text-4xl font-bold text-blue-500">Contact Me</h1>

      <div className="bg-white/5 border border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-2xl space-y-6">
        
        <div className="space-y-4 text-gray-300">
          <p><strong className="text-gray-400">Email:</strong> brijeshkumar4705r@gmail.com</p>
          <p><strong className="text-gray-400">Phone:</strong> +91 7011947253</p>
          <p><strong className="text-gray-400">City:</strong> Faridabad</p>
          <p><strong className="text-gray-400">University:</strong> Guru Jambheshwar University of Science and Technology (Hisar)</p>
        </div>

        <div className="text-center">
          <a 
            href="mailto:brijeshkumar4705r@gmail.com" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            📧 Contact Me
          </a>
        </div>
      </div>
    </div>
        <div>

            <Footer/>
        </div>
        </div>
  )
}
