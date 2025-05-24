import React from 'react';
import CountUp from 'react-countup';


const NumberCounter = () => {
  return (
    <div className='bg-secondary text-white text-center py-12'>
        <div className='container grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold' >
                <CountUp
                start={0}
                end={526}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Exper tutors</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp
                start={0}
                end={20000}
                suffix='+'
                duration={4}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Hours content</p>    
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp
                start={0}
                end={298}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
            </p>
            <p>Subject and courses</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-semibold'>
            <CountUp
                start={0}
                end={65901}
                suffix='+'
                duration={5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
                </p>
            <p>Active students</p>    
            </div>  
        </div>
    </div>
  )
}

export default NumberCounter;
