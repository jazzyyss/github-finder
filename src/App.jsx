import {Routes, Route} from 'react-router-dom'

import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Alert from './components/layout/Alert'
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
        <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
