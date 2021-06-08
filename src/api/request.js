import Axios from 'axios';
import querystring from 'querystring';
// 默认超时时间
Axios.defaults.timeout = 5000;
// 添加请求拦截器，在请求头中加 token
Axios.interceptors.request.use(
  config => {
    const cfg = config;
    if (localStorage.getItem('accessToken')) {
      cfg.headers.Authorization = localStorage.getItem('accessToken');
    }
    return cfg;
  },
  error => Promise.reject(error),
);
// 接口请求错误拦截
Axios.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          this.$message.info('未登录用户');
          break;
        case 403:
          this.$message.info('登录状态已过期，请重新登录');
          break;
        case 404:
          this.$message.info('网络请求不存在');
          break;
        case 405:
          this.$message.info('网络请求http方法出错');
          break;
        default:
          this.$message.info('网络请求出错');
        // console.log(("网络请求出错"));
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  },
);

export default {
  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      Axios.get(url, { params })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          console.log(err);
          reject(err.data);
        });
    });
  },
  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  post(url, params, config) {
    return new Promise((resolve, reject) => {
      Axios.post(url, querystring.stringify(params), config)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err, '错误信息');
        });
    });
  },
  /**
   * put方法，对应put请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  put(url, params) {
    return new Promise((resolve, reject) => {
      Axios.put(url, querystring.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
  /**
   * delete方法，对应delete请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  delete(url, params) {
    return new Promise((resolve, reject) => {
      Axios.delete(url, querystring.stringify(params))
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  },
};
