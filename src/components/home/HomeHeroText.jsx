import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] pt-5 text-center'>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
                THE SPARK FOR
            </div>
            <div className='text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]'>
                ALL
                <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden'>
                    <Video />
                </div>
                THINGS
            </div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
                CREATIVE
            </div>
        </div >
    )
}

export default HomeHeroText