module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  Image: {
    imageSizes: [200, 240, 315],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**'
      }
    ]
  }
}
