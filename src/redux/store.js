import {configureStore} from '@reduxjs/toolkit'
import {userNewsReducer} from './reduxslice/userNewsSlice'
import {userInfoReducer} from './reduxslice/userInfoSlice';

export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer,
        userNews: userNewsReducer
    },
});