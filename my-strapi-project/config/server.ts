export default ({ env }) => {
  const host = env("HOST", "0.0.0.0");
  const port = parseInt(process.env.PORT, 10) || env.int("PORT", 1337);

  console.log(`Starting Strapi on host: ${host}, port: ${port}`);

  return {
    host,
    port,
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
