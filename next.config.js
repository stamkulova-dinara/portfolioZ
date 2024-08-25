// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;


// next.config.js
module.exports = {
    // Настройка для работы с внешними ресурсами
    async rewrites() {
      return [
        {
          source: '/static/chunks/:path*',
          destination: '/_next/static/chunks/:path*',
        },
      ]
    },
    output: 'standalone',
    // Настройка для работы с изображениями и статическими ресурсами
    images: {
      domains: ['/_next/static/media/'], // Замените на домены, с которых загружаются изображения
      loader: 'default', // Используйте стандартный загрузчик изображений
    },
    // // Другие настройки
    // webpack: (config) => {
    //   // Настройки Webpack, если требуется
    //   return config;
    // },
  }
  