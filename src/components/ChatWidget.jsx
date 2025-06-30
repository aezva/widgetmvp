import React, { useState, useRef, useEffect } from 'react';
import NNIAService from '../services/nniaService.js';
import '../index.css';

const defaultWelcome = '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?';

const ChatWidget = ({ config }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'assistant', text: config?.welcomeMessage || defaultWelcome }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const nniaService = new NNIAService(config);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  return (
    <div className="nnia-widget-card bg-white rounded-xl shadow-lg p-4 w-80 max-w-full slide-in" style={{ fontFamily: 'inherit' }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">N</div>
        <span className="font-semibold text-lg">NNIA</span>
      </div>
      <div className="flex flex-col h-64 custom-scrollbar overflow-y-auto mb-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-1`}>
            <div className={
              `rounded-2xl px-4 py-2 max-w-[80%] break-words shadow-sm text-sm ` +
              (msg.sender === 'user'
                ? 'bg-blue-500 text-white rounded-br-md'
                : 'bg-gray-100 text-gray-900 rounded-bl-md')
            }>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-2 max-w-[80%] shadow-sm opacity-70 text-sm">
              NNIA está escribiendo...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoComplete="off"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-semibold" disabled={loading}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatWidget; 