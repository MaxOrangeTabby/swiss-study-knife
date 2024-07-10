import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Components/navbar/navbar'
import StartPage from './Components/startPage/startPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<StartPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App