import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './redux/store/slices/counter/counterSlice'
function App() {

  // Para leer o usar algo del store 
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => { dispatch( increment() ) }}>
          Increment
        </button>
        <button onClick={() => { dispatch( decrement() ) }}>
          Decrement
        </button>
        <button onClick={() => { dispatch( incrementBy(5) ) }}>
          Increment by 5
        </button>
        </div>
    </>
  )
}

export default App
