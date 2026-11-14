import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        invest: 'invest.html',
        stocks: 'stocks.html',
        earnings: 'earnings.html',
        'ea-earnings': 'ea-earnings.html',
      },
    },
  },
})
