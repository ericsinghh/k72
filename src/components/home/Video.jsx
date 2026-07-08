import React from 'react'

const Video = () => {
  return (
    <div className='h-screen w-screen fixed'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1783528006~exp=1783531606~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=2b88aef6a30b9cde7257989f897b931e7fdf26432d1bc0696ae6455924b0a2d3&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
