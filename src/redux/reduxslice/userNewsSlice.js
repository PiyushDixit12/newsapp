import {createSlice} from "@reduxjs/toolkit";

const initialValue = {
    news: "isLoading" // initial is loading then fetch news
}
export const userNewsSlice = createSlice({
    name: "userNews",
    initialState: initialValue,
    reducers: {
        setUserNews(state,action) {
            console.log("Setting userNews ",action.payload)
            state.news = action.payload;
        },
        removeOneUserNews(state,action) {
            state.news = state.news.filter((value) => {return action.payload !== value.id})
        }
    }
});
export const {setUserNews,removeOneUserNews} = userNewsSlice.actions;
export const userNewsReducer = userNewsSlice.reducer;