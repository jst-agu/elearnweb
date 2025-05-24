import React from 'react';
import { NavbarMenu } from '../../mockData/data';
import { MdComputer, MdMenu } from 'react-icons/md';
import { motion } from 'motion/react';
import ResponsiveMenu from '../ResponsiveMenu';

const Navbar = () => {

  const [toggleOpen, setToggleOpen] = React.useState(false);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  }

  return (
    <>
    <motion.div
     initial={{ opacity: 0}}
     animate={{ opacity: 1}}
     transition={{ duration: 0.5, delay: 0.5 }}
     >
    <div className='container flex justify-between items-center py-6'>
      {/* Logo section */}
      <div className='text-2xl flex items-center gap-2 font-bold'>
      <MdComputer className='text-3xl text-secondary'/>
      <p>AguTutor</p>
      </div>
      {/* Menu section  */}
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-6'>
          {
            NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}
                  className='inline-block text-gray-600 text-sm 
                  xl:text-base py-1 px-2 xl:px-3 hover:text-secondary
                  transition-all duration-300 font-semibold'>
                    {item.title}
                    </a>
                </li>
              );
            })
          }
        </ul>
      </div>
      {/* CTA Button section */}
      <div className='hidden lg:block space-x-6'>
        <button className='font-semibold'>Sign in</button>
        <button className='text-white bg-secondary 
        font-semibold rounded-full px-6 py-2'>Register </button>
      </div>
      {/* Mobile Hamburger menu  */}
      <div className='lg:hidden' 
      onClick={handleToggle}>
        <MdMenu className='text-4xl' />
      </div>
    </div>
      
    </motion.div>
    {/* Responsive sidebar menu */}
    <div>
      <ResponsiveMenu  toggleOpen={toggleOpen} setToggleOpen={setToggleOpen} />
    </div>
    </>
  )
}

export default Navbar
