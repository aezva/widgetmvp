import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': '{}',
    'process': '{}'
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'NNIAWidget',
      fileName: (format) => `nnia-widget.${format === 'umd' ? 'umd.js' : format}`,
      formats: ['es', 'umd']
    },
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      external: (id, ctx) => {
        const format = ctx && ctx.format;
        if (format === 'es') {
          return ['react', 'react-dom'].includes(id);
        }
        return false; // No externos en UMD
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        intro: '',
        outro: ''
      }
    }
  }
}) 