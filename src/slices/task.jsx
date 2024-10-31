import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    task:[],
}
export const todoSlice = createSlice({
    name:"task",
    initialState,
    reducers:  {
        addTask(state,action)  {
            state.task.push(action.payload);
            // state.task = [...state.task,action.payload]; another method
        },
        deleteTask (state,action)  {
            state.task = state.task.filter((curTask,index) => index !== action.payload);
        },
    },
});

export const {addTask,deleteTask} = todoSlice.actions;

export default todoSlice.reducer;