/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/files/resume.pdf',
        permanent: false, // 302 redirect. Set to true for 301
      },
      {
        source: '/github',
        destination: 'https://github.com/boratoker',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/boratoker',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
