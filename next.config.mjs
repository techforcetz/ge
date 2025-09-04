// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', // add any external image domains you use
       'images.pexels.com',
       'avatars.githubusercontent.com',
       'placekitten.com',
       'randomuser.me',
       'i.pravatar.cc',
       'lh3.googleusercontent.com',
       'media.istockphoto.com',
       'cdn.sstatic.net',
       'www.example.com', // replace with your actual domain if needed
    ],
  },
};

export default nextConfig;
