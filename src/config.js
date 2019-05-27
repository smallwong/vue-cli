const production = {
  test: "prod"
};

const uat = {
  test: "uat"
};

const develop = {
  test: "dev"
};

const config = {
  production,
  uat,
  develop
};

export default config[process.env.NODE_ENV];
