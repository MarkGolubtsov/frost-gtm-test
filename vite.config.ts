import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            ui: '/src/ui',
            model: '/src/model',
            service: '/src/service',
            store: '/src/store',
            util: '/src/util',
        }
    }
})
