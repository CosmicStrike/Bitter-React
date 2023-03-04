import Login from './pages/login'
import Main from './pages/main'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar';
import { SnackbarProvider } from 'notistack';
function App() {
  let t = localStorage.getItem("Login")


  return (
    <>
      <SnackbarProvider
        maxSnack={1}
        preventDuplicate
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={t ? <Main /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}



export default App;
