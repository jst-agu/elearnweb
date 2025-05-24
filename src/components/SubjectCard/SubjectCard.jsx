import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaComputer } from 'react-icons/fa6'
import { GiMaterialsScience } from 'react-icons/gi';
import { MdHistory, MdOutlineEngineering, MdOutlinePsychology } from 'react-icons/md';
import { DiJavascript } from 'react-icons/di';
import { VscDebugContinue } from 'react-icons/vsc';


const subjectList = [
    {
        id: 1,
        name: "Engineer",
        icon: <MdOutlineEngineering />,
        color: "#0063ff",
        delay: 0.2 
    },
    {
        id: 2,
        name: "English",
        icon: <FaBook />,
        color: "#00c986",
        delay: 0.3
    },
    {
        id: 3,
        name: "Programming",
        icon: <FaComputer />,
        color: "#922aee",
        delay: 0.4
    },
    {
        id: 4,
        name: "Science",
        icon: <GiMaterialsScience />,
        color: "#ea7516",
        delay: 0.5
    },
    {
        id: 5,
        name: "History",
        icon: <MdHistory />,
        color: "#075267",
        delay: 0.6
    },
    {
        id: 6,
        name: "Psychology",
        icon: <MdOutlinePsychology />,
        color: "#986d1d",
        delay: 0.7
    },
    {
        id: 7,
        name: "Web Design",
        icon: <DiJavascript />,
        color: "#b93838",
        delay: 0.8
    },
    {
        id: 8,
        name: "See all",
        icon: <VscDebugContinue />,
        color: "#464646",
        delay: 0.9
    }
];

const SubjectCard = () => {
  return (
  <>
    <div className='container py-14 md:py-24'>
    {/* header section  */}
    <div className='space-y-4 p-6 text-center
    max-w-[600px] mx-auto mb-5'>
    <h1 className='uppercase font-semibold
    text-orange-600'>Our tutor subjects</h1>
    <p className='font-semibold text-3xl  capitalize'>
        find online tutors for your Subjects
        </p>
    </div>
    {/* card section  */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
        {
            subjectList.map((item) => {
                return (
                    <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100,
                    delay: item.delay }} 
                    className='border rounded-lg border-secondary/20
                    p-4 flex justify-start items-center gap-4
                    hover:!scale-105 hover:!shadow-xl duration-200
                    cursor-pointer' key={item.id}>
                        <div style={{ color: item.color, 
                        backgroundColor: item.color + '20' }} 
                        className='w-10 h-10 rounded-md 
                        flex justify-center items-center'>
                        {item.icon}
                        </div>
                        <p>{item.name}</p>
                    </motion.div>
                )
            })
        }
        </div>
    </div>
  </>
  );
};

export default SubjectCard;
