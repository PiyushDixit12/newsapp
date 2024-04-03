import {ToastContainer} from 'react-toastify';
import './App.css'
import {UserContextProvider} from './context/UserContextProvider';
import {AppRoutes} from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
import {getToken} from 'firebase/messaging';
import {messaging} from './firebase';
export function App() {
  useEffect(() => {
    function requestPermission() {
      Notification.requestPermission().then((value) => {
        console.log("Value of permission ",value);
        // BAT3cDhWehAW0h-PJH9GdSZ9vLfp4YgIjdRCzsGRP435QjH70wdep2GcVN1KlHNqZ_YfIH0VQRhBL_2X4-g0qvY
        if(value == "granted") {
          getToken(messaging,{vapidKey: 'BAT3cDhWehAW0h-PJH9GdSZ9vLfp4YgIjdRCzsGRP435QjH70wdep2GcVN1KlHNqZ_YfIH0VQRhBL_2X4-g0qvY'}).then(value => {
            console.log("Token is ")
            console.log(value);
          }).catch(err => {
            console.log("error on token messaging",err)
          })
        }
      })
    }
    requestPermission();
  },[]);
  return (
    <UserContextProvider>

      <AppRoutes />
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce />
    </UserContextProvider>
  );

}

