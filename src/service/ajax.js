import axios from "axios";
import envConfig from "@/config";

const http = axios.create({
  baseURL: envConfig.baseURL, // change uat or prod
  timeout: 15000
  // headers: { 'X-Custom-Header': 'foobar' }
});

// http response 攔截器
http.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "錯誤請求";
          break;
        case 401:
          error.message = "未授權，請重新登陸";
          break;
        case 403:
          error.message = "拒絕訪問";
          break;
        case 404:
          error.message = "請求錯誤,未找到該資源";
          break;
        case 405:
          error.message = "請求方法未允許";
          break;
        case 408:
          error.message = "請求超時";
          break;
        case 500:
          error.message = "服務端出錯";
          break;
        case 501:
          error.message = "網路未實現";
          break;
        case 502:
          error.message = "網路錯誤";
          break;
        case 503:
          error.message = "服務不可用";
          break;
        case 504:
          error.message = "網路超時";
          break;
        case 505:
          error.message = "http版本不支持該請求";
          break;
        default:
          error.message = `連接錯誤${error.response.status}`;
      }
    } else {
      error.message = "連接到服務器失敗";
    }
    return Promise.reject(error.message);
  }
);

class APIS {
  getRequest = (url, params) => {
    let options = {
      method: "get",
      url,
      params
    };

    return this.AjaxFunction(options);
  };

  postRequest = (url, params) => {
    let options = {
      method: "post",
      url,
      data: params
    };
    return this.AjaxFunction(options);
  };

  patchRequest = (url, params = {}) => {
    let options = {
      method: "patch",
      url,
      data: params
    };

    return this.AjaxFunction(options);
  };

  AjaxFunction = options => {
    return new Promise((resolve, reject) => {
      http(options)
        .then(res => {
          // eslint-disable-next-line no-console
          if (res.statusText == "OK") {
            return resolve(res.data);
          } else {
            return reject(res.data);
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log("ajax reject", err);
        });
    });
  };
}
export default APIS;
