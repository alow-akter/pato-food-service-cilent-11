
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}>
      </RouterProvider>
      <AuthProvider></AuthProvider>
    </div>
  );
}

export default App;
