import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<ListEmployee/>}/>
            <Route path='/employees' element={<ListEmployee/>}/>
            <Route path='/add-employee' element={<EmployeeComponent/>}/>
            <Route path='/edit-employee/:id' element={<EmployeeComponent/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
