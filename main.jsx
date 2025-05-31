import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ textAlign: 'center', paddingTop: '50px' }}>
    <h1>LexMind Painel V2</h1>
    <p>Painel funcional carregado com Vite + React</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
