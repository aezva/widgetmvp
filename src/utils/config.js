// Configuración por defecto del widget
export const defaultConfig = {
  // Posición del widget
  position: 'bottom-right', // 'bottom-right', 'bottom-left', 'bottom-center', 'top-right', 'top-left', 'top-center'
  
  // Tema y colores
  theme: {
    primaryColor: '#3b82f6',
    backgroundColor: '#ffffff',
    textColor: '#1f2937'
  },
  
  // Mensajes
  welcomeMessage: '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?',
  
  // Configuración de API
  apiUrl: 'https://api.nnia.com',
  businessId: 'default',
  
  // Comportamiento
  autoOpen: false,
  showTimestamp: true,
  maxMessages: 50,
  
  // Horarios (opcional)
  schedule: {
    enabled: false,
    timezone: 'America/Mexico_City',
    hours: {
      monday: { start: '09:00', end: '18:00' },
      tuesday: { start: '09:00', end: '18:00' },
      wednesday: { start: '09:00', end: '18:00' },
      thursday: { start: '09:00', end: '18:00' },
      friday: { start: '09:00', end: '18:00' },
      saturday: { start: '10:00', end: '16:00' },
      sunday: { start: '10:00', end: '16:00' }
    },
    offlineMessage: 'Estamos fuera de horario. Te responderemos pronto.'
  }
}

// Función para validar configuración
export const validateConfig = (config) => {
  const validPositions = ['bottom-right', 'bottom-left', 'bottom-center', 'top-right', 'top-left', 'top-center']
  
  if (!validPositions.includes(config.position)) {
    console.warn(`Posición inválida: ${config.position}. Usando 'bottom-right' por defecto.`)
    config.position = 'bottom-right'
  }
  
  if (!config.businessId) {
    console.warn('businessId es requerido')
    return false
  }
  
  return true
}

// Función para fusionar configuraciones
export const mergeConfig = (userConfig) => {
  const merged = { ...defaultConfig }
  
  // Fusionar configuración del usuario
  Object.keys(userConfig).forEach(key => {
    if (typeof userConfig[key] === 'object' && userConfig[key] !== null) {
      merged[key] = { ...merged[key], ...userConfig[key] }
    } else {
      merged[key] = userConfig[key]
    }
  })
  
  return merged
} 