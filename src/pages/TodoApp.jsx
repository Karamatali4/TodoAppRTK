import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../slices/task';
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoApp() {
    const [data, setData] = useState('');
    const getData = useSelector((state) => state.task.task);

    console.log("get data", getData)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.trim()) {
            dispatch(addTask(data));
            setData('');  // Clear input after adding task
        }
    };

    // const handleDelete = () => {

    // }
    return (
        <>
            <div className="container bg-gray-800 max-w-[30rem]  h-auto mx-auto pb-10 flex flex-col justify-start items-center rounded-s-2xl text-lime-100 gap-6">
                <h2 className="text-lime-200 font-bold text-3xl">TODO APP</h2>
                <div className="box flex flex-col justify-center items-start gap-5">
                    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-10">
                        <input
                            type="text"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className="p-2 rounded-3xl px-5 text-lime-900 outline-none"
                            placeholder="Enter data"
                        />
                        <button type="submit" className="bg-green-700 text-lime-100 p-3 rounded-2xl">
                            Add Task
                        </button>
                    </form>

                    <ul className='w-[100%] '>
                        {getData.map((data, index) => (
                            
                                <div className="box flex justify-between items-center p-2">
                                    <li key={index} className='text-2xl'>{index + 1}: {data}</li>
                                    <p><RiDeleteBin5Line onClick={() => dispatch(deleteTask(index))} className='text-2xl text-red-900 hover:text-yellow-200 hover:text-lg duration-500 ' />
                                    </p>
                                </div>
                            

                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TodoApp;
