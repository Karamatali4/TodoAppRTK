import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { addTask, deleteTask } from "./slices/task";

export const store = configureStore({
    reducer: {
        task: todoReducer,
    },
});

store.dispatch(addTask("buy Mango"));
store.dispatch(addTask("buy Banana"));
store.dispatch(addTask("buy Apple"));



console.log(store.getState());
