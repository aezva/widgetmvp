# NNIA Widget

Widget de chat para integrar NNIA en sitios web externos.

## 🚀 Deploy

El widget está desplegado en Vercel y disponible en:
- **URL de producción**: `https://widget.iamnnia.com/`
- **Archivo JS**: `https://widget.iamnnia.com/nnia-widget.umd.js`

## 📦 Instalación

### 1. Código HTML de Integración

```html
<!-- NNIA Widget -->
<script src="https://widget.iamnnia.com/nnia-widget.umd.js"></script>
<script>
  window.initNNIAWidget({
    businessId: 'TU_BUSINESS_ID',
    apiUrl: 'https://tu-backend-url.com',
    position: 'bottom-right',
    theme: {
      primaryColor: '#3b82f6',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    },
    welcomeMessage: '¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?',
    autoOpen: false,
    showTimestamp: true,
    maxMessages: 50
  })
</script>
```

### 2. Configuración

| Parámetro | Tipo | Descripción | Default |
|-----------|------|-------------|---------|
| `businessId` | string | ID del negocio en NNIA | - |
| `apiUrl` | string | URL del backend de NNIA | - |
| `position` | string | Posición del widget | `bottom-right` |
| `theme.primaryColor` | string | Color principal | `#3b82f6` |
| `theme.backgroundColor` | string | Color de fondo | `#ffffff` |
| `theme.textColor` | string | Color del texto | `#1f2937` |
| `welcomeMessage` | string | Mensaje de bienvenida | - |
| `autoOpen` | boolean | Abrir automáticamente | `false` |
| `showTimestamp` | boolean | Mostrar timestamps | `true` |
| `maxMessages` | number | Máximo de mensajes | `50` |

### 3. Posiciones Disponibles

- `bottom-right` - Inferior derecha
- `bottom-left` - Inferior izquierda
- `bottom-center` - Inferior centro
- `top-right` - Superior derecha
- `top-left` - Superior izquierda
- `top-center` - Superior centro

## 🛠️ Desarrollo Local

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

### Probar localmente
```bash
# Abrir test-widget.html en el navegador
```

## 🔧 Configuración del Backend

El widget se conecta al backend de NNIA usando los siguientes endpoints:

- **Chat**: `POST /nnia/respond`
- **Configuración**: `GET /nnia/widget/config/:businessId`

### Parámetros del Chat
```javascript
{
  message: "Mensaje del usuario",
  clientId: "business-id",
  source: "widget"
}
```

## 🐛 Solución de Problemas

### Error: "window.initNNIAWidget is not a function"

1. Verificar que el script se cargue correctamente
2. Verificar la URL del script: `https://widget.iamnnia.com/nnia-widget.umd.js`
3. Verificar que no haya errores de CORS

### Error: "Failed to load resource"

1. Verificar que la URL del backend sea correcta
2. Verificar que el backend esté funcionando
3. Verificar que el `businessId` sea válido

### Widget no aparece

1. Verificar que el script se cargue sin errores
2. Verificar que `window.initNNIAWidget` esté disponible
3. Verificar la consola del navegador para errores

## 📝 Changelog

### v1.0.0
- ✅ Unificación de endpoints con el frontend principal
- ✅ Corrección de parámetros (`clientId`, `source`)
- ✅ Mejora en la exportación UMD
- ✅ Configuración de CORS en Vercel
- ✅ Archivo de prueba mejorado

## 🔗 Enlaces Útiles

- [Backend NNIA](https://github.com/tu-repo/nnia-backend)
- [Frontend NNIA](https://github.com/tu-repo/nnia-frontend)
- [Documentación](https://docs.nnia.com) 