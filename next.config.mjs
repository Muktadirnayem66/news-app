/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "ichef.bbci.co.uk", 
          },        
          
          
        ],
      },
};

export default nextConfig;
