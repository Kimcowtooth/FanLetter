import Detail from 'pages/Detail'
import Home from 'pages/Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


export default function Router() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='*' element={<Navigate replace to ="/"/>} />
        </Routes>
    </BrowserRouter>
    
  )
}
