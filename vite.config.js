import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  jsx: 'preserve',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
})
