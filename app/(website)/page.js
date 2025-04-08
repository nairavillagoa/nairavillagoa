import Landing from '@/_components/Home/Landing'
import React from 'react'
import NumberStats from '@/_components/Home/NumberStats'
import HomeCards from '@/_components/Home/HomeCards'
import Allpackages from '@/_components/Home/Allpackages'
import OurOffers from '@/_components/Home/OurOffers'
import Blogs from '@/_components/Home/Blogs'
import AboutTest from '@/_components/Home/AboutTest'

const Home = () => {

  return (
    <div className='flex flex-col'>
      <Landing />
      <HomeCards />
      <NumberStats />
      <Allpackages />
      <OurOffers />
      <Blogs />
      <AboutTest />
    </div>
  )
}

export default Home