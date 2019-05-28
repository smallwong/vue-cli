import http from "@/service/ajax";

const API_URL = {
  // ...同API路徑，但不同目錄
  // pos: "/posts"
};

class testApi extends http {
  list = async params => {
    // ...使用ajax.js的function來打Api
    try {
      // const response = await this.getRequest(API_URL.pos, params);
      // return response;
    } catch (err) {
      // eslint-disable-next-line no-console
      // console.log("err", err);
    }
  };
}

export default new testApi();
