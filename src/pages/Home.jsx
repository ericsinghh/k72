import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
         <video />
      </div>
      <div className='h-screen w-screen relative flex flex-col items-center justify-between py-10'>
        <HomeHeroText />
        <HomeBottomText />
      </div>

    </div>
  )
}

export default Home
