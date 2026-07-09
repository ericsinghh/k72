import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav' className='text-white h-screen py-40 w-full absolute bg-amber-900'>
            <div className=''>
                <div className='link border-t-1 border-white'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Projects</h1>
                    <div className='absolute flex'>
                        <div className='flex flex-nowrap items-center'>
                            <h2 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FullScreenNav