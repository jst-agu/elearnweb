import React from 'react'
import { motion } from 'motion/react'
import { SlideUp } from '../../utility/animation'
const Banner = ({image, tag, title, subtitle, link, reverse}) => {
  return (
    <div className='bg-[#f9f9f9] pb-14'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2
             space-y-6 md:space-y-0">
                {/* banner image section */}
                <div className={`flex justify-start 
                    ${reverse && 'md:order-last md:justify-end'}`}>
                    <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100,
                    delay: 0.2 }}
                    src={image} alt="" className='w-[400px] h-full
                    object-cover' />
                </div>
                {/* banner text section */}
                <div className='flex flex-col justify-center text-center
                md:text-left space-y-4 lg:max-w-[500px]'>
                    <motion.p
                    variants={SlideUp(0.5)}
                    initial='hidden'
                    whileInView={'visible'} 
                    className='text-sm text-orange-600 
                    font-semibold capitalize'>
                        {tag}
                        </motion.p>
                    <motion.p
                    variants={SlideUp(0.7)}
                    initial='hidden'
                    whileInView={'visible'} 
                    className='text-xl font-semibold
                    lg:text-2xl capitalize'>
                        {title}
                        </motion.p>
                    <motion.p
                    variants={SlideUp(0.9)}
                    initial='hidden'
                    whileInView={'visible'} 
                    className='text-sm text-slate-500'>
                        {subtitle}
                        </motion.p>
                    <motion.div
                    variants={SlideUp(1.1)}
                    initial='hidden'
                    whileInView={'visible'} 
                    className='flex justify-center
                    md:justify-start'>
                        <button className='primary-btn !mt-5'>
                            Get Started</button>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
