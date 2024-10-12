import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './Routes/route';
function App() {
  return (
   <BrowserRouter>
    <ApplicationRoutes />
   </BrowserRouter>
  );
}

export default App;
