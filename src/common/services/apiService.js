import axios from 'axios';

import ApiJson from './apiJson';
import {
  showErrorToast,
  showSuccessToast,
  getLocalStorage,
  clearLocalStorage
} from '../helpers/Utils';
let apiFailCounter = 0;
// axios.defaults.baseURL = 'http://103.76.253.131:81';
axios.defaults.baseURL = 'http://eatluvnpray.org/';
//axios.defaults.baseURL = 'http://103.21.53.11:3004';
axios.interceptors.request.use(
  function (config) {
   
    let access_token = '';
    let userInfo =
      getLocalStorage('userInfo') ||
      getLocalStorage('customerInfo') ||
      getLocalStorage('userInfoProff') ||
      getLocalStorage('userInfoAdmin');
    if (userInfo) {
      if (userInfo.u_accesstoken) {
        access_token = userInfo.u_accesstoken;
        config.headers.Accesstoken = `${access_token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const prepareDataObject = (_data_, paramObj) => {
  for (let key in _data_) {
    if (paramObj[key] || paramObj[key] === false) {
      _data_[key] = paramObj[key];
    } else {
      if (typeof _data_[key] !== 'object') _data_[key] = '';
    }
  }
  return _data_;
};

const injectParamsToUrl = (_url_, paramObj) => {
  var url = _url_;
  for (let key in paramObj) {
    url = url.replace(':' + key, paramObj[key]);
  }
  return url;
};

const handleErrorByStatus = (error) => {
if (error && error.status === 'error' && error.message === "100") {
          // axios({
          //   url: '/elp/logout',
          //   method: 'GET',
          //   data: {}
          // }).then(response => {
             clearLocalStorage();
          // });
}else if (error && error.status === 'error') {
    const message = error.message;
    showErrorToast(message);
  }
};

const spikeViewApiService = (apiKeyName, data) => {
  let apiDetails = ApiJson[apiKeyName];
  if (!apiDetails) {
    throw new Error(
      'Api configuration do not found in api-json, please check api-json.js'
    );
  }

  let requestObject = Object.assign({}, apiDetails);
  requestObject.data = prepareDataObject(requestObject.data, data);
  requestObject.url = injectParamsToUrl(requestObject.url, data);
  return axios(requestObject)
    .then(function (result) {
      apiFailCounter = 0;
      if (
        result.data &&
        result.data &&
        result.data.status === 'success'
      ) {  
        if (result.data.message) {
          const message = result.data.message;
          if (requestObject.showResultMessage === true)
            showSuccessToast(message);
        }
      } else {
        handleErrorByStatus(result.data);
      }
      return result;
    })
    .catch(function (error) {
      if (error && error.response) {
        if (requestObject.showErrorMessage === true)
          handleErrorByStatus(error.response);
      }

      // if (
      //   error.config.maxContentLength - 1 &&
      //   error.toString().indexOf('Network Error') > -1
      // ) {
      //   apiFailCounter++;
      //   if (apiFailCounter >= 3) {
      //     localStorage.clear();
      //     window.open(window.location.origin, '_self');
      //   }
      // }

      return error.response;
    });
};

export default spikeViewApiService;
