import React, { useState, useRef, useEffect } from 'react';
import NNIAService from '../services/nniaService.js';
import '../index.css';

const defaultWelcome = '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?';
const defaultPrimary = '#2563eb'; // Azul por defecto
const defaultPosition = 'bottom-right';

const getPositionStyle = (position) => {
  switch (position) {
    case 'bottom-left':
      return { left: '24px', bottom: '24px', right: 'auto' };
    case 'top-right':
      return { right: '24px', top: '24px', bottom: 'auto' };
    case 'top-left':
      return { left: '24px', top: '24px', bottom: 'auto' };
    default:
      return { right: '24px', bottom: '24px', left: 'auto' };
  }
};

const ChatWidget = ({ config }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [widgetConfig, setWidgetConfig] = useState(null);
  const [configLoading, setConfigLoading] = useState(true);
  const messagesEndRef = useRef(null);
  const nniaService = new NNIAService(config);

  // Cargar configuración del widget desde el backend
  useEffect(() => {
    const loadWidgetConfig = async () => {
      if (!config?.businessId || !config?.apiUrl) {
        setConfigLoading(false);
        return;
      }

      try {
        const widgetData = await nniaService.getWidgetConfig(config.businessId);
        setWidgetConfig(widgetData);
        
        // Inicializar mensaje de bienvenida con la configuración cargada
        setMessages([
          { id: 1, sender: 'assistant', text: widgetData?.welcomeMessage || defaultWelcome }
        ]);
      } catch (error) {
        console.error('Error cargando configuración del widget:', error);
        // Usar configuración por defecto si falla
        setMessages([
          { id: 1, sender: 'assistant', text: defaultWelcome }
        ]);
      } finally {
        setConfigLoading(false);
      }
    };

    loadWidgetConfig();
  }, [config?.businessId, config?.apiUrl]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    const userMsg = { id: Date.now(), sender: 'user', text: newMessage };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    try {
      const data = await nniaService.sendMessage(newMessage);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'assistant', text: data.nnia || 'No se recibió respuesta de NNIA.' }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, sender: 'assistant', text: 'Ocurrió un error al conectar con NNIA.' }
      ]);
    } finally {
      setLoading(false);
      setNewMessage('');
    }
  };

  // Usar configuración del backend o valores por defecto
  const primaryColor = widgetConfig?.primaryColor || config?.theme?.primaryColor || defaultPrimary;
  const position = widgetConfig?.position || config?.position || defaultPosition;
  const widgetLogoUrl = widgetConfig?.widgetLogoUrl || config?.widgetLogoUrl;

  // Estilos para la burbuja flotante
  const bubbleStyle = {
    background: primaryColor,
    color: '#fff',
    width: 60,
    height: 60,
    borderRadius: '50%',
    boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'fixed',
    zIndex: 9999,
    ...getPositionStyle(position),
    transition: 'box-shadow 0.2s',
  };

  // Estilos para la ventana de chat
  const chatWindowStyle = {
    position: 'fixed',
    zIndex: 10000,
    width: 350,
    maxWidth: '95vw',
    height: 480,
    maxHeight: '90vh',
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    ...getPositionStyle(position),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    animation: 'slideIn 0.25s',
  };

  // Si está cargando la configuración, mostrar burbuja simple
  if (configLoading) {
    return (
      <div style={bubbleStyle} title="Cargando NNIA...">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="31.416">
            <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
            <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    );
  }

  return (
    <>
      {/* Burbuja flotante */}
      {!open && (
        <div style={bubbleStyle} onClick={() => setOpen(true)} title="Abrir chat NNIA">
          {widgetLogoUrl ? (
            <img 
              src={widgetLogoUrl} 
              alt="NNIA" 
              style={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.3)'
              }} 
            />
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="white" opacity="0.15"/>
              <path d="M7 10h10M7 14h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </div>
      )}
      {/* Ventana de chat */}
      {open && (
        <div style={chatWindowStyle} className="nnia-widget-card">
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', padding: '16px', borderBottom: '1px solid #eee', background: '#fff',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12, overflow: 'hidden'
            }}>
              {widgetLogoUrl ? (
                <img 
                  src={widgetLogoUrl} 
                  alt="Logo" 
                  style={{ 
                    width: 40, 
                    height: 40, 
                    objectFit: 'cover', 
                    borderRadius: '50%' 
                  }} 
                />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill={primaryColor} opacity="0.7"/>
                </svg>
              )}
            </div>
            <span style={{ fontWeight: 600, fontSize: 18, color: '#222' }}>NNIA</span>
            <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer' }} title="Cerrar">×</button>
          </div>
          {/* Mensajes */}
          <div style={{ flex: 1, padding: '16px', background: '#fff', overflowY: 'auto' }} className="custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                <div style={{
                  borderRadius: 16,
                  padding: '10px 16px',
                  maxWidth: '80%',
                  background: msg.sender === 'user' ? primaryColor : '#f3f4f6',
                  color: msg.sender === 'user' ? '#fff' : '#222',
                  fontSize: 15,
                  boxShadow: msg.sender === 'user' ? `0 2px 8px ${primaryColor}20` : '0 1px 4px rgba(0,0,0,0.03)',
                  borderBottomRightRadius: msg.sender === 'user' ? 4 : 16,
                  borderBottomLeftRadius: msg.sender === 'user' ? 16 : 4,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ borderRadius: 16, padding: '10px 16px', maxWidth: '80%', background: '#f3f4f6', color: '#222', fontSize: 15, opacity: 0.7 }}>
                  NNIA está escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: 8, padding: 16, borderTop: '1px solid #eee', background: '#fff' }}>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', fontSize: 15, outline: 'none' }}
              autoComplete="off"
            />
            <button 
              type="submit" 
              style={{ 
                background: primaryColor, 
                color: '#fff', 
                border: 'none', 
                borderRadius: 8, 
                padding: '0 18px', 
                fontWeight: 600, 
                fontSize: 15, 
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }} 
              disabled={loading}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 