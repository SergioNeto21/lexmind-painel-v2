import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>LexMind Painel V2</h1>
      <p>Plataforma inteligente para gestão de petições.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
