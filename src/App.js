import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddFoodItem from './routes/add-food/add-food.component';
import FoodCollection from './routes/food-collection/food-collection.component';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';
import UserAuth from './routes/user-auth/user-auth.component';

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
        <Route 
          path='/addfood'
          element={<AddFoodItem />}
        />
        <Route 
          path='/auth'
          // element={<h1>yes</h1>}
          element={<UserAuth />}
        />
      </Route>
    </Routes>
  );
}

export default App;
