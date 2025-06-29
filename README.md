# NNIA Widget

Widget de chat inteligente para sitios web que integra NNIA, el asistente virtual.

## 🚀 Características

- **Chat en tiempo real** con NNIA
- **Personalizable** desde el Client Panel
- **Múltiples posiciones** (bottom-right, bottom-left, center, etc.)
- **Temas personalizables** (colores, fuentes)
- **Responsive** y moderno
- **Fácil integración** con cualquier sitio web

## 📦 Instalación

### Desarrollo Local

```bash
cd widget-nnia
npm install
npm run dev
```

### Producción

```bash
npm run build
```

## 🔧 Configuración

### Configuración Básica

```javascript
window.initNNIAWidget({
  businessId: 'tu-business-id',
  apiUrl: 'https://tu-api.nnia.com',
  position: 'bottom-right',
  theme: {
    primaryColor: '#3b82f6',
    backgroundColor: '#ffffff',
    textColor: '#1f2937'
  },
  welcomeMessage: '¡Hola! Soy NNIA, ¿en qué puedo ayudarte?'
})
```

### Opciones de Configuración

| Opción | Tipo | Por Defecto | Descripción |
|--------|------|-------------|-------------|
| `businessId` | string | `'default'` | ID del negocio en NNIA |
| `apiUrl` | string | `'https://api.nnia.com'` | URL de la API de NNIA |
| `position` | string | `'bottom-right'` | Posición del widget |
| `theme.primaryColor` | string | `'#3b82f6'` | Color principal |
| `theme.backgroundColor` | string | `'#ffffff'` | Color de fondo |
| `theme.textColor` | string | `'#1f2937'` | Color del texto |
| `welcomeMessage` | string | `'¡Hola! Soy NNIA...'` | Mensaje de bienvenida |
| `autoOpen` | boolean | `false` | Abrir automáticamente |
| `showTimestamp` | boolean | `true` | Mostrar timestamps |
| `maxMessages` | number | `50` | Máximo de mensajes |

### Posiciones Disponibles

- `bottom-right` (por defecto)
- `bottom-left`
- `bottom-center`
- `top-right`
- `top-left`
- `top-center`

## 🌐 Integración en Sitio Web

### Método 1: Script Directo

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mi Sitio Web</title>
</head>
<body>
  <!-- Tu contenido del sitio -->
  
  <!-- NNIA Widget -->
  <script src="https://widget.nnia.com/nnia-widget.umd.js"></script>
  <script>
    window.initNNIAWidget({
      businessId: 'tu-business-id',
      apiUrl: 'https://tu-api.nnia.com'
    })
  </script>
</body>
</html>
```

### Método 2: Carga Asíncrona

```html
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://widget.nnia.com/nnia-widget.umd.js';
    script.onload = function() {
      window.initNNIAWidget({
        businessId: 'tu-business-id',
        apiUrl: 'https://tu-api.nnia.com'
      });
    };
    document.head.appendChild(script);
  })();
</script>
```

## 🎨 Personalización desde Client Panel

El widget se puede personalizar completamente desde el Client Panel de NNIA:

1. **Colores**: Primary, secondary, background
2. **Posición**: 6 posiciones diferentes
3. **Mensaje inicial**: Personalizable
4. **Logo**: Subir imagen personalizada
5. **Horarios**: Configurar disponibilidad
6. **Comportamiento**: Auto-open, timestamps, etc.

## 🔌 API Endpoints

El widget utiliza estos endpoints de la API de NNIA:

- `POST /api/nnia/chat` - Enviar mensaje
- `GET /api/widget/config/{businessId}` - Obtener configuración

## 🛠️ Desarrollo

### Estructura del Proyecto

```
widget-nnia/
├── src/
│   ├── components/
│   │   ├── ChatWidget.jsx      # Componente principal
│   │   ├── ChatBubble.jsx      # Burbuja flotante
│   │   ├── ChatWindow.jsx      # Ventana de chat
│   │   └── MessageInput.jsx    # Input de mensajes
│   ├── services/
│   │   └── nniaService.js      # Servicio de API
│   ├── utils/
│   │   └── config.js           # Configuración
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos
├── dist/                       # Build de producción
├── package.json
└── vite.config.js
```

### Comandos Disponibles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting
```

## 📱 Responsive

El widget es completamente responsive y se adapta a:

- **Desktop**: 320px de ancho
- **Tablet**: Se ajusta automáticamente
- **Mobile**: Optimizado para pantallas pequeñas

## 🔒 Seguridad

- **CORS**: Configurado para dominios autorizados
- **Rate Limiting**: Implementado en el backend
- **Validación**: Todas las entradas son validadas
- **HTTPS**: Requerido en producción

## 🚀 Despliegue

El widget se despliega en Vercel y está disponible en:

- **Desarrollo**: `https://widget-dev.nnia.com`
- **Producción**: `https://widget.nnia.com`

## 📞 Soporte

Para soporte técnico o preguntas sobre el widget:

- **Email**: soporte@nnia.com
- **Documentación**: https://docs.nnia.com/widget
- **GitHub**: https://github.com/nnia/widget 