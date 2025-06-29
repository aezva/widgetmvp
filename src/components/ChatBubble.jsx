import React from 'react'

const ChatBubble = ({ onClick, isOpen, config }) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-14 h-14 rounded-full shadow-lg cursor-pointer transition-all duration-300
        hover:scale-110 hover:shadow-xl flex items-center justify-center
        ${isOpen ? 'bg-gray-500' : ''}
      `}
      style={{
        backgroundColor: isOpen ? '#6b7280' : config.theme.primaryColor,
        color: '#ffffff'
      }}
    >
      {isOpen ? (
        // Icono de cerrar (X)
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ) : (
        // Icono de chat
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )}
    </div>
  )
}

export default ChatBubble 