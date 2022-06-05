module.exports = {
  timeout: 60000,
  require: ["ts-node/register"],
  "full-trace": true,
  bail: true,
  exit: true,
  spec: "test/**/*.test.ts",
};
