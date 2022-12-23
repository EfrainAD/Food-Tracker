import { Routes, Route } from 'react-router-dom';
import './App.css';
import FoodCollection from './routes/food-collection/food-collection.component';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route 
          index
          element={<Home />}
        />
        <Route 
          path='/myfoods'
          element={<FoodCollection />}
        />
      </Route>
    </Routes>
  );
}

export default App;
