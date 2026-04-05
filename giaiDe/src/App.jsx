
import UseCounter from "./components/UseCounter"
function App() {

  const { count, increment, decrement, reset } = UseCounter(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>


    </div >
  )
}

export default App