import React from 'react'
import { images } from '../constants'

const NavItemsInfo = [
  { name: 'home' },
  { name: 'articles' },
  { name: 'pages' },
  { name: 'pricing' },
  { name: 'FAQ ' },
  
]
const NavItems = ({ name }) => {
  return (
    <li className='relative group'>
      <a href="/" className='px-4 py-2'>
      { name }
      </a>
      <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};
const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>

          <img src={images.Logo} alt="logo" />

        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
          
              <a href="/" className='px-4 py-2'></a>

              <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                /
              </span>
              {NavItemsInfo.map((item) => (
                <NavItems key={item.name} name={item.name} />


              ))}

            


          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500">
            sign in
          </button>
        </div>
      </header>
    </section>
  )
}

export default Header