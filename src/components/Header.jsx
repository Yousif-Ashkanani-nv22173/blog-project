import React from 'react'
import { images } from '../constants'



const Header = () => {
  return (
    <section> 
      <header className="container mx-auto px-5 flex justify-between py-4 items-center"> 
        <div>

<img src={images.Logo} alt="logo" />

        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
           <li className='relative group'>
            <a href="/"className='px-4 py-2'>home</a>
            <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
              </li>
           <li>
            <a href="">articles</a>
           </li>
           <li><a href="">pages</a></li>
           <li><a href="">pricing</a></li>
           <li><a href="">FAQ</a></li>
<button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500">
sign in
</button>

          </ul>
        </div>
      </header>
    </section>
  )
}

export default Header