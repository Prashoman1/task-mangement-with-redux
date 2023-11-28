import { configureStore } from "@reduxjs/toolkit";
import itemTaskSlice from "./features/itemtask/itemTaskSlice";


export const store = configureStore({
  reducer: {
    taskState: itemTaskSlice,
  },
});
