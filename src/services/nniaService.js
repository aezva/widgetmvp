class NNIAService {
  constructor(config) {
    this.apiUrl = config.apiUrl
    this.businessId = config.businessId
  }

  async sendMessage(message) {
    try {
      const response = await fetch(`${this.apiUrl}/nnia/respond`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          clientId: this.businessId,
          source: 'widget'
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error al enviar mensaje a NNIA:', error)
      throw error
    }
  }

  async getWidgetConfig(businessId) {
    try {
      const response = await fetch(`${this.apiUrl}/nnia/widget/config/${businessId}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error al obtener configuración del widget:', error)
      throw error
    }
  }
}

export default NNIAService 