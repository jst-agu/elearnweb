import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ toggleOpen }) => {
  return (
    <AnimatePresence mode='wait'>
        {
            toggleOpen && (<motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
            >
                <div className='text-xl font-semibold uppercase bg-primary
                text-white py-3 m-6 rounded-3xl'>
                    <ul className='flex flex-col gap-10 justify-center 
                    cursor-pointer items-center'>
                        <li>Home</li>
                        <li>For Students</li>
                        <li>Resources</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li className='text-black'>Sign in</li>
                    </ul>
                </div>
            </motion.div>
            )
        }

    </AnimatePresence>
  )
}

export default ResponsiveMenu

