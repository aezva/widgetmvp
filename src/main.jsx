import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatWidget from './components/ChatWidget.jsx'
import './index.css'

// Función para inicializar el widget
function initNNIAWidget(config = {}) {
  // Evitar múltiples instancias
  if (document.getElementById('nnia-widget-container')) return;
  const container = document.createElement('div')
  container.id = 'nnia-widget-container'
  document.body.appendChild(container)

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <ChatWidget config={config} />
    </React.StrictMode>
  )
  
  return {
    destroy: () => {
      const container = document.getElementById('nnia-widget-container')
      if (container) {
        ReactDOM.unmountComponentAtNode(container)
        container.remove()
      }
    }
  }
}

// --- AUTOINICIALIZACIÓN POR ATRIBUTOS data-* ---
function autoInitFromScriptTag() {
  if (typeof window === 'undefined') return;
  // Busca el <script> que cargó este archivo
  const scripts = document.querySelectorAll('script[src*="nnia-widget.umd.js"]');
  if (!scripts.length) return;
  const script = scripts[scripts.length - 1]; // El último suele ser el correcto
  if (!script.dataset.businessId || !script.dataset.apiUrl) return; // Requiere mínimo estos dos

  // Construye la config a partir de los atributos data-*
  const config = {
    businessId: script.dataset.businessId,
    apiUrl: script.dataset.apiUrl,
    position: script.dataset.position || 'bottom-right',
    theme: {
      primaryColor: script.dataset.primaryColor || '#3b82f6',
      backgroundColor: script.dataset.backgroundColor || '#ffffff',
      textColor: script.dataset.textColor || '#1f2937'
    },
    welcomeMessage: script.dataset.welcomeMessage || '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?',
    autoOpen: script.dataset.autoOpen === 'true',
    showTimestamp: script.dataset.showTimestamp !== 'false',
    maxMessages: parseInt(script.dataset.maxMessages) || 50
  };
  // Inicializa el widget automáticamente
  initNNIAWidget(config);
}

// Exportar para UMD
if (typeof window !== 'undefined') {
  window.initNNIAWidget = initNNIAWidget
  // Autoinicialización si hay atributos data-*
  autoInitFromScriptTag();
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