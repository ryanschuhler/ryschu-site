module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "ryschu-site",
        protocol: "https",
        hostname: "www.ryanschuhler.com",
      },
    },
  ],
}
