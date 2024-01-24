import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';
import Loadingbar from './Components/Loadingbar';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {isLoading}=useSelector(state=>state.itemSlice)


  
  return (
    <BrowserRouter>
      {(isLoading) && <Loadingbar />}
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
