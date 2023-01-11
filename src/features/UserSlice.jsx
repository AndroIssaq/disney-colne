import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:'',
    email:'',
    photo:'',
}

  const UserSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        UserLogin:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
            state.photo=action.payload.photo
        },
        UserLogout:(state)=>{
            state.name=null
            state.email=null
            state.photo=null
        }
    }
})

export default UserSlice.reducer
export const {UserLogin,UserLogout}=UserSlice.actions
