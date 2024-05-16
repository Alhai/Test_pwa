import './App.css'

import Counter from './Counter/Counter'
import HelloWorld from './HelloWorld/Helloworld'
import List from './List/List'
import NameForm from './NameForm/NameForm'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld></HelloWorld>
      <Counter></Counter>
    <List></List>
    <NameForm></NameForm>
    </>
  )
}

export default App
