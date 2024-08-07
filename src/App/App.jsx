import { Outlet } from 'react-router-dom';
import './app.css'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
