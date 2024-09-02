import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateMinerios from './CriarMinerios'
import ReadMinerios from './ListarMinerios'
import UpdateMinerios from './AlterarMinerios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/minerios/cadastrar" element={ <CreateMinerios/> }/>
                  <Route path="/minerios" element={ <ReadMinerios/> }/>
                  <Route path="/minerios/alterar" element={ <UpdateMinerios/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



