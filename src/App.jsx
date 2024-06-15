import React from 'react'
import LandingPage from './Components/LandingPage'
import Services from './Components/Services'
import Choose from './Components/Choose'
import OtherPrograms from './Components/OtherPrograms'
import FeedBack from './Components/FeedBack'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <LandingPage/>
      <Services />
      <Choose />
      <OtherPrograms/>
      <FeedBack/>
      <Footer/>
    </div>
  )
}

export default App