import React from 'react'

const MessageInput = ({ value, onChange, onSend, onKeyPress, isLoading, config }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Escribe tu mensaje..."
          disabled={isLoading}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          style={{
            borderColor: config.theme.primaryColor,
            minHeight: '40px',
            maxHeight: '100px'
          }}
          rows="1"
        />
      </div>
      
      <button
        onClick={onSend}
        disabled={!value.trim() || isLoading}
        className={`
          p-2 rounded-lg transition-all duration-200 flex items-center justify-center
          ${!value.trim() || isLoading 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'hover:scale-105 hover:shadow-md'
          }
        `}
        style={{
          backgroundColor: !value.trim() || isLoading 
            ? '#d1d5db' 
            : config.theme.primaryColor,
          color: '#ffffff'
        }}
      >
        {isLoading ? (
          // Loading spinner
          <svg
            className="animate-spin w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          // Send icon
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22,2 15,22 11,13 2,9"></polygon>
          </svg>
        )}
      </button>
    </div>
  )
}

export default MessageInput 