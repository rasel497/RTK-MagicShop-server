import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../component/State/userAuthSlice";

export const store = configureStore({
    reducer: {
        users: userAuthSlice,
    }
});