import React from 'react'
import image from "../../assets/image.jpg"
import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <div className="navbar bg-cyan-950 shadow-lg sticky top-0 z-50 h-20 px-4 sm:px-8">
      <div className="flex-1 justify-center">
        
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl font-bold"><Link to="/">HOME</Link> </button>

      </div>

       
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-cyan-400 transition-all p-0">
            <div className="rounded-full  border-cyan-400">
              

              <Link to="/"  >
              <img
                alt="Profile"
                src={image}
                className="h-full w-full"
              />  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}