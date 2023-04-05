import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Routes } from './component/router';
import { store } from './store';
import { useSelector } from 'react-redux';
import { authRoutes } from './component/router';

function App() {
  
  const token = useSelector(state => state.counter.token);
  
  // const router = createBrowserRouter(Routes);
  const router = createBrowserRouter(token ? Routes : authRoutes);
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
