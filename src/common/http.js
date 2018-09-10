
'use strict';

import axios from 'axios';
import {camelizeKeys} from 'humps';

// 如果请求超时超过了5s将被中断
axios.defaults.timeout = 5000;
// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
axios.defaults.baseURL = 'http://localhost:3000/';
// `maxContentLength` 定义允许的响应内容的最大尺寸,默认为2000
axios.defaults.maxContentLength = 6000000;
// axios 默认不发送cookie，需要全局设置true发送cookie
axios.defaults.withCredentials = true;

const requestData = (obj) => {
    let {
      url, method, headers, params, data
    } = obj;

    method = method && method.toUpperCase() || 'GET';
    data = data && JSON.stringify(data) || {};

    if(typeof headers === 'undefined'){
      headers = {};
    }

    if(typeof params === 'undefined'){
      params = {};
    }

    headers['Authorized-Key'] = 'abc';

    return axios({
      url,
      method,
      headers,
      params,
      data
    }).then(res => {
        const camelizedJson = camelizeKeys(res);

        if(parseInt(camelizedJson.status) !== 200){
          return Promise.reject({message: camelizedJson});
        }

        // console.log('res', res);

        return camelizedJson.data;
      }).catch(error => {
          return Promise.reject({message: error.message});
    });
};

// get
const $get = (url, params) => requestData({url, params});

// post
const $post = (url, method, data) => requestData({url, method, data});

// put
const $put = (url, method, data) => requestData({url, method, data});

// delete
const $delete = (url, method) => requestData({url, method});

export {
  $get , $post, $put, $delete
}






