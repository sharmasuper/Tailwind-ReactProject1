import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base :"/Tailwind-ReactProject1/",                //jo directory hoti h vo hi likhtai h
  build:{
    outDir:"./docs"
  }
})
