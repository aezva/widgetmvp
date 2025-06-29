import React, { useState, useEffect } from 'react'
import ChatBubble from './ChatBubble.jsx'
import ChatWindow from './ChatWindow.jsx'

const ChatWidget = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Configuración por defecto
  const defaultConfig = {
    position: 'bottom-right',
    theme: {
      primaryColor: '#3b82f6',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    },
    welcomeMessage: '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?',
    apiUrl: 'https://api.nnia.com',
    businessId: 'default'
  }

  const finalConfig = { ...defaultConfig, ...config }

  // Posiciones del widget
  const getPositionClasses = () => {
    switch (finalConfig.position) {
      case 'bottom-left':
        return 'bottom-4 left-4'
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2'
      case 'top-right':
        return 'top-4 right-4'
      case 'top-left':
        return 'top-4 left-4'
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2'
      default:
        return 'bottom-4 right-4'
    }
  }

  // Inicializar mensaje de bienvenida
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          type: 'assistant',
          content: finalConfig.welcomeMessage,
          timestamp: new Date()
        }
      ])
    }
  }, [finalConfig.welcomeMessage])

  const handleSendMessage = async (message) => {
    // Añadir mensaje del usuario
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      // Aquí irá la llamada a la API de NNIA
      const response = await fetch(`${finalConfig.apiUrl}/api/nnia/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          businessId: finalConfig.businessId,
          origin: 'widget'
        })
      })

      const data = await response.json()
      
      // Añadir respuesta de NNIA
      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: data.message,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
      // Mensaje de error
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`fixed ${getPositionClasses()} z-50`}>
      {/* Ventana de chat */}
      {isOpen && (
        <div className="slide-in">
          <ChatWindow
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onClose={() => setIsOpen(false)}
            config={finalConfig}
          />
        </div>
      )}
      
      {/* Burbuja de chat */}
      <ChatBubble
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        config={finalConfig}
      />
    </div>
  )
}

export default ChatWidget 