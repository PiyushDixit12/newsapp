import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBrLigsp38sImUz-5iAZDxZffa90agJGCU",
    authDomain: "bookstore-tailwind-march-24.firebaseapp.com",
    projectId: "bookstore-tailwind-march-24",
    storageBucket: "bookstore-tailwind-march-24.appspot.com",
    messagingSenderId: "68162882221",
    appId: "1:68162882221:web:52c0e9ac24ca088e885424",
    databaseURL: "https://bookstore-tailwind-march-24-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);

export const appDataBase = getDatabase(app);

export const auth = getAuth(app);