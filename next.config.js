/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
    },
    images: {
        domains: ['jslpvxgcjqptnldsnwvx.supabase.co'], // Add your domain(s) here
      },
}

module.exports = nextConfig
