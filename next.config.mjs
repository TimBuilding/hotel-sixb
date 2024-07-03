/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.prismic.io',
                port: '',
                pathname: '/hotel-sixb/**',
            },
            {
                protocol: 'https',
                hostname: 'vzooaoblxhvxmkjxpeve.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/media/**',
            }
        ],
    },

};

export default nextConfig;
