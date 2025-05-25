import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import purgecss from 'vite-plugin-purgecss'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    purgecss({
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './index.html',
      ],
      safelist: {
        standard: [/^animate-/, /^hover:/, /^focus:/, /^active:/, /^group/],
        deep: [/^motion-safe:/, /^motion-reduce:/],
      },
    }),
  ],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React and routing
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          
          // UI and animation libraries
          'vendor-ui': ['framer-motion', 'react-icons'],
          
          // Map related
          'vendor-map': ['leaflet', 'react-leaflet', 'leaflet.markercluster'],
          
          // Property related components
          'property-components': [
            './src/components/properties/featuredProperties',
            './src/components/properties/offerProperties',
            './src/components/properties/newProperties',
            './src/pages/PropertyDetails',
            './src/pages/Properties',
            './src/pages/SaleProperties',
            './src/pages/RentProperties'
          ],
          
          // Common components
          'common-components': [
            './src/components/common/LogoLoader',
            './src/components/common/PageTransition',
            './src/components/common/ScrollToTop',
            './src/components/common/FloatingWhatsApp'
          ],
          
          // Layout components
          'layout-components': [
            './src/components/layout/Navbar',
            './src/components/layout/Footer'
          ],
          
          // Static pages
          'static-pages': [
            './src/pages/About',
            './src/pages/Contact',
            './src/pages/FAQ',
            './src/pages/PrivacyPolicy',
            './src/pages/UserGuide'
          ]
        },
        // Ensure consistent chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        dead_code: true,
        global_defs: {
          'process.env.NODE_ENV': '"production"'
        },
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false,
        ecma: 2020,
      },
      ecma: 2020,
      keep_classnames: false,
      keep_fnames: false,
      ie8: false,
      safari10: true,
    },
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    hmr: true,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
})
