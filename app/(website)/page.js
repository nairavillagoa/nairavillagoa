import Landing from '@/_components/Home/Landing'
import React from 'react'
import NumberStats from '@/_components/Home/NumberStats'
import HomeCards from '@/_components/Home/HomeCards'
import Allpackages from '@/_components/Home/Allpackages'
import OurOffers from '@/_components/Home/OurOffers'
import Blogs from '@/_components/Home/Blogs'
import InstagramFeed from '@/_components/Home/InstagramFeed'
import ContactForm from '@/_components/Home/ContactForm'
import Testimonial from '@/_components/Testimonial'
import OurClients from '@/_components/Home/OurClients'
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
      {/* <InstagramFeed />
      <Testimonial />
      <OurClients />
      <ContactForm /> */}
    </div>
  )
}

export default Home