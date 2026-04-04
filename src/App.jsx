import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Legit from './pages/Legit'
import Philosophy from './pages/Philosophy'
import Industries from './pages/Industries'
import Services from './pages/Services'
import Founding from './pages/Founding'
import Talkto from './pages/Talkto'
import Navbar from './components/Navbar'
import Framework from './pages/Framework'
import CaseStudies from './pages/CaseStudies'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Founding />}/>
        <Route path='/legal' element={<Legit />} />
        <Route path='/philosophy' element={<Philosophy />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/services' element={<Services />} />
        <Route path='/talkto' element={<Talkto />} />
        <Route path='/framework' element={<Framework />} />
        <Route path='/caseStudies' element={<CaseStudies />} />
      </Routes>
    </div>
  )
}

export default App