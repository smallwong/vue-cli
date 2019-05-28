const production = {
  baseURL: "prod"
};

const uat = {
  baseURL: "uat"
};

const develop = {
  baseURL: "/api"
};

const config = {
  production,
  uat,
  develop
};

export default config[process.env.NODE_ENV];
