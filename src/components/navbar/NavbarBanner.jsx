import { motion } from 'motion/react';
import React from 'react'

const NavbarBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const barBanner = () => {
      setIsOpen(!isOpen);
    }

  return (
    isOpen && (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.7 }} 
        className="bg-primary text-sm text-center 
        font-semibold p-1 hidden lg:block relative">
            Are you a university or school student for an online 
            tutoring partnershhip?
            <a href='#'>Talk to us..</a>
            <div className='absolute top-1/2 right-10 cursor-pointer
            -translate-y-1/2 text-xl' onClick={barBanner}>
                X
            </div>
        </motion.div>
    )
  )
}

export default NavbarBanner
