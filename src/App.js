import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import './App.css';

function App() {
  return <BrowserRouter >
    <Header/>
    <Route path='/' exact>
    <Homepage/>
   </Route>
  <Route path='/cart' exact>
  <Cart/>
 </Route>
  </BrowserRouter>
   
}

export default App;
