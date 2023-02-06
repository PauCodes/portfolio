import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Nav from './comoponents/Nav';
import Footer from './comoponents/Footer';
import About from './comoponents/About';

function App() {
  return (
    <main className='wrapper'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
