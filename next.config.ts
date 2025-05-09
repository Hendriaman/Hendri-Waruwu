import type { NextConfig } from 'next';

const version = process.env.VERSION || '1.0.0'; // Default to '1.0.0' if no version is specified

const nextConfig: NextConfig = {
  distDir: `/releases/release-${version}`,
};

export default nextConfig;
