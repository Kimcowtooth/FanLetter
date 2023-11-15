import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

function App() {
  return (
   <BrowserRouter>
      <Route path='/home' element={<Home />} ></Route>
      <Route path='/detail' element={<Detail />}></Route>
   </BrowserRouter>
  );
}

export default App;

