import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatWidget from './components/ChatWidget.jsx'
import './index.css'

// Función para inicializar el widget
window.initNNIAWidget = function(config = {}) {
  const container = document.createElement('div')
  container.id = 'nnia-widget-container'
  document.body.appendChild(container)

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <ChatWidget config={config} />
    </React.StrictMode>
  )
}

// Para desarrollo local
if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ChatWidget config={{
        apiUrl: 'http://localhost:3001',
        businessId: 'demo-business',
        position: 'bottom-right',
        theme: {
          primaryColor: '#3b82f6',
          backgroundColor: '#ffffff',
          textColor: '#1f2937'
        }
      }} />
    </React.StrictMode>
  )
} 