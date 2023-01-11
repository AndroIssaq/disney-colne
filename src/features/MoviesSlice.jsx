import { createSlice } from "@reduxjs/toolkit";
const initialState={
    NewInDeisny:null,
    Recommended:null,
    Trending:null,
    Originals:null
}

 export const MovieSlice=createSlice({
    name:'Movies',
    initialState:initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.NewInDeisny=action.payload.NewInDeisny
            state.Recommended=action.payload.Recommended
            state.Trending=action.payload.Trending
            state.Originals=action.payload.Originals
        }
    }
})

export const {setMovies} = MovieSlice.actions
export default MovieSlice.reducer