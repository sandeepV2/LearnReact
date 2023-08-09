// import { useState } from 'react'
import './App.css'
import ReduxCounter from './ReduxCounter';
import { store } from './ReduxCounter'; 
import {Provider} from "react-redux"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <>
      <p>I am here</p>
      <ReduxCounter />
    </>
    </Provider>
  )
}

export default App
