import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";
import { div } from 'motion/react-client';

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className='rounded-t-3xl'>
      <div className='bg-primary/5'>  
      <div className='container'>
        <div className='grid md:grid-cols-4 md:gap-4 py-5
        border-t-2 border-gray-300/20 text-black'>
            {/* brand info section */}
            <div className='py-8 px-4 space-y-4'>
                <div className='text-2xl flex items-center gap-2
                font-bold uppercase'>
                <MdComputer className='text-4xl text-secondary'/>
                <p>E-Tutor</p>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                The Name Of The Lord is a Strong Tower; the Righteous runneth
                into it and are saved.. Look upto JESUS!    
                </p>
                <div className='flex items-center justify-start gap-5 !mt-6'>
                    <a href="#" className='hover:text-red-400
                    duration-200'>
                      <HiLocationMarker className='text-3xl'/>
                    </a>
                    <a href="#" className="bg-gradient-to-r 
                    hover:from-[#f9ce34] hover:via-[#ee2a7b] 
                    hover:to-[#6228d7] duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-[#0a66c2] duration-200">
                  <FaLinkedin className="text-3xl" />
                </a> 
                </div>           
            </div>
            {/* footer links */}
            <div className='grid grid-cols-2 md:grid-cols-3
            md:col-span-3 md:ml-14'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold
                    sm:text-left text-justify mb-5'>
                        Important Links
                    </h1>
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold
                    sm:text-left text-justify mb-5'>
                        Company Links
                    </h1>
                    <ul>
                        <li>
                            <a href="#">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-xl text-xl font-bold
                    sm:text-left text-justify mb-5'>
                        Resources
                    </h1>
                    <ul>
                        <li>
                            <a href="#">
                                Partners
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                AI Skillset
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Learning Tools
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Disciplier
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* copyright section */}
        </div>
        <div className='mt-8'>
                <div className='text-center py-6 border-t-2
                border-gray-800/10'>
                    <span className='text-sm text-black/60 font-medium'>
                    ©copyright 2025 Agu The Billonaire Dev
                    </span>
                </div>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;
