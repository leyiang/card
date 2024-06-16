import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//@ts-ignore
import { CompileSlash } from './src/compile/CompilePlugin.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        await CompileSlash(),
    ],
})