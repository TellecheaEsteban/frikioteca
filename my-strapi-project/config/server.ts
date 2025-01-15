export default () => {
  const port = 1337;
  if (!port) {
    throw new Error("Environment variable PORT is not defined!");
  }

  console.log(`Starting Strapi BACKEND on host: 0.0.0.0, port: ${port}`);

  return {
    host: "0.0.0.0",
    port,
    app: {
      keys: process.env.APP_KEYS ? process.env.APP_KEYS.split(",") : [],
    },
  };
};
