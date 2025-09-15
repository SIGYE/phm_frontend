import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/about-us/AboutUs';
import Ministries from './pages/about-us/Ministries';
import ConnectGroup from './pages/about-us/ConnectGroup';
import Leaders from './pages/about-us/Leaders';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
  <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path='/sermons' element={<Sermons/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about-us/ministries' element={<Ministries/>}/>
      <Route path='/about-us/connect-group' element={<ConnectGroup/>}/>
      <Route path='/about-us/leaders' element={<Leaders/>}/>
  </Routes>
    </Router>
  )
}

export default App
