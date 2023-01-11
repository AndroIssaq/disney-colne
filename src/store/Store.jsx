import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "../features/UserSlice";
export const store= configureStore({
    reducer:{
        user:UserReduser
    }
})