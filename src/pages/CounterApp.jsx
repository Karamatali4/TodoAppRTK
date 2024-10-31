
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../feature/counter/Counter';
import { useState } from 'react';

function CounterApp() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())

  }
  const handleReset = () => {
    dispatch(reset())

  }
  const handleAmount = () => {
    dispatch(incrementByAmount(amount))

  }
  return (
    <>
      <div className="container max-w-[30rem] h-[100vh] bg-black m-auto flex flex-col justify-center items-center gap-5 p-5 ">
        <h2 className='text-lime-50'>Counter App</h2>

        <button onClick={handleReset} className='bg-blue-500 text-lime-50 p-2 rounded-3xl hover:bg-green-700  duration-500'>Reset</button>
        <div className="box flex flex-col justify-center items-center gap-5">
          <button onClick={handleIncrement} className='bg-blue-900 text-lime-50 p-2 rounded-3xl hover:bg-green-700  duration-500'>Increament</button>

          <h2 className='text-lime-50'>Counter: {count}</h2>

          <button onClick={handleDecrement} className='bg-blue-900 text-lime-50 p-2 rounded-3xl hover:bg-green-700  duration-500'>Decrement</button>

          <input type="number" placeholder='Enter Number' value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button onClick={handleAmount} className='bg-blue-900 text-lime-50 p-2 rounded-3xl hover:bg-green-700  duration-500'>Decrement</button>
        </div>
      </div>

    </>
  )
}

export default CounterApp
