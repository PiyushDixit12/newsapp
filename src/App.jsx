import './App.css'
import {UserContextProvider} from './context/UserContextProvider';
import {AppRoutes} from './routes/AppRoutes';

export function App() {
  return (
    <UserContextProvider>

      <AppRoutes />

    </UserContextProvider>
  );

}

