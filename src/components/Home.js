import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <p className='text-[#ccd6f6]'>Hi , my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ahmed farag</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I’m Back-end Developer.</h2>
                <p className='font-bold text-[#8892b0] py-4 max-w-[700px]' >I’m Ahmed Farag, From Egypt,
                    I work as a back-end developer(PHP), and I have enough experience to receive large projects I also participated in many teamwork, in addition to creating many of my own projects.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'><Link  to="work"  smooth={true}  duration={500}>
                        Work
                    </Link> 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                     </button>
                </div>
            </div>
        </div>
    )
}

export default Home