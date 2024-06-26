import React from 'react'

function Navbar() {
  return (
  <nav className='bg-purple-200 text-white'>
    <div className="mycontainer flex justify-between items-center px-4 py-5 h-20">
    <div className="logo font-bold text-2xl ">
    <span className='text-green-700'>   &lt;</span>
PassOP
      
      <span className='text-green-700'>   /&gt;</span>
      </div>
    <ul>
        <li  className='flex gap-4 '>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#"><i class="fas fa-file-contract    "></i></a>
            <a className='hover:font-bold' href="#">Home</a>
        </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar
