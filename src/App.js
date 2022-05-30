import { Route, Routes } from 'react-router-dom';
import About from './components/Aboutme';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header'
import Home from './components/Home';
import { Picture } from './Gallery/Gallery';
function App() { //add routes 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery data={Picture} />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
