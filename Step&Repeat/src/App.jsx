import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import FAQ from './Pages/FAQ/FAQ.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  )
} 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="main-content">
          <AppContent />
        </div>
        
      </div>
    </Router> 
  )
}

export default App