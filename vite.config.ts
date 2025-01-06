import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

//@ts-ignore
import { CompileSlash } from './src/compile/CompilePlugin.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
		TanStackRouterVite(),
        react(),
        // await CompileSlash(),
    ],
})