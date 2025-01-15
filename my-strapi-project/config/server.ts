export default ({ env }) => {
  const port = parseInt(process.env.PORT, 10) || 1337;
  console.log(`Starting Strapi on host: 0.0.0.0, port: ${port}`);

  return {
    host: "0.0.0.0",
    port,
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
