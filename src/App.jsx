import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
