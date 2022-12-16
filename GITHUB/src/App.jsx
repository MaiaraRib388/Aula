import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'

function App() {
  const texto = prompt("Digite Seu Nome");
  return (
    <div className='App'>
      <NovaTarefa/>
      <Form props={texto}/>
      
    </div>
  )
}

export default App
