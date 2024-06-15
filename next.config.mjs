/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'occ-0-3933-116.1.nflxso.net',
                port: ''
            }
        ]
    }   
};

export default nextConfig;
