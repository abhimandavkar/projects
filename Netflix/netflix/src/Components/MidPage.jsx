import React from 'react'
import BottomPage from './BottomPage';
import FooterPage from './FooterPage';
import './Midpage.css'

function MidPage() {
  return (
    <div>
      <div>
        <div className='first_Box'>
          <div className='point_Tag'>
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </p>
          </div>
          <img src={require('./Images/tv.png')} alt="" />
          {/* <iframe src={require('./Images/video-tv.m4v')}/> */}
        </div>
        <div className='second_Box'>
          <img src={require('./Images/mobile-0819.jpg')} alt="" />
          <div className='point_2'>
            <h1>Download your shows to watch offline.</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
        <div className='third_Box'>
          <div className='point_3'>
            <h1>Watch everywhere.</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <img src={require('./Images/device-pile-in.png')} alt="" />
          {/* <iframe src={require('./Images/video-1.m4v')}/> */}
        </div>
        <div className='forth_Box'>
        <img src={require('./Images/kidsValueProp.png')} alt="" />
          <div className='point_4'>
            <h1>Create profiles for children.</h1>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>
      <div>
        <BottomPage/>
      </div>
      <div>
        <FooterPage/>
      </div>
    </div>
  )
}

export default MidPage;