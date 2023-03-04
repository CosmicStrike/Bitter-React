import Login from './Pages/login'
import Register from './Pages/register'
import Main from './Pages/main'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar';
import { SnackbarProvider } from 'notistack';
function App() {
  let t = localStorage.getItem("token")

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
            <Route path='/' element={t === true ? <Main /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}



export default App;
