import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/AppRoutes';
import { SmoothScroll } from './components/common/SmoothScroll';
import { PlaceProvider } from './context/PlaceContext';

function App() {
  return (
    <BrowserRouter>
      <PlaceProvider>
        <SmoothScroll />
        <AppRoutes />
      </PlaceProvider>
    </BrowserRouter>
  );
}

export default App;
