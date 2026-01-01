import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customer from './Customer';
import Home from './Home';
import Create from './create';
import Read from './Read';
import Update from './Update';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} /> 
          <Route path='/customer' element={<Customer />} />
          <Route path='/create' element={<Create/>} />
          <Route path='/read/:cust_id' element={<Read/>} />
          <Route path='/update/:cust_id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;