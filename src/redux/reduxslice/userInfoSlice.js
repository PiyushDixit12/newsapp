import {createSlice} from "@reduxjs/toolkit";

const initialValue = JSON.parse(localStorage.getItem("user"));

const userInfoSlice = createSlice({
    initialState: initialValue,
    name: "userInfo",
    reducers: {
        getUserInfo(state) {
            return state;
        },
        setUserInfo(state,action) {
            state = action.payload;
        }
    }
});
export const {getUserInfo,setUserInfo} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;