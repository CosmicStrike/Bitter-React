import Login from './Pages/login'
import Register from './Pages/register'
import Main from './Pages/main'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';



function App() {
  let t = localStorage.getItem("token")
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={t === true ? <Main /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
