import React from "react";

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full h-[400px] md:h-[850px] mb-4 flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-1/2 group transition-all relative rounded-none hover:rounded-[40px] md:hover:rounded-[70px] overflow-hidden h-full'>
                    <img className='h-full w-full object-cover' src={props.image1} alt="" />
                    <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
                        <h2 className='uppercase text-2xl md:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full '>Voir le projet </h2>
                    </div>
                </div>
                <div className='w-full md:w-1/2 group transition-all relative rounded-none hover:rounded-[40px] md:hover:rounded-[70px] overflow-hidden h-full'>
                    <img className='h-full w-full object-cover' src={props.image2} alt="" />
                    <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
                        <h2 className='uppercase text-2xl md:text-6xl font-[font1] border-2 md:border-4 pt-2 md:pt-4 px-4 md:px-8 text-white border-white rounded-full '>Voir le projet </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard