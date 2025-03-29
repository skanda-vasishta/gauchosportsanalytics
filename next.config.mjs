// import mdx from "@next/mdx";

// const withMDX = mdx({
//   extension: /\.mdx?$/,
//   options: {},
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["ts", "tsx", "md", "mdx"],
// };


// export default withMDX(nextConfig);
import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true, // 308 Redirect
      },
    ];
  },
};

export default withMDX(nextConfig);
