import Cryptr from "cryptr";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import CONSTANTS from "./Constants";
import _ from "lodash";

const ENCRYPTION_KEY = "sd5b75nb7577#^%$%*&G#CGF*&%@#%*&";
var cryptlib = require("cryptlib"),
  iv = "F@$%^*GD$*(*#!12", //16 bytes = 128 bit
  //iv = crypto.randomBytes(16),
  key = cryptlib.getHashSha256(ENCRYPTION_KEY, 32); //32 bytes = 256 bits

const cryptr = new Cryptr(CONSTANTS.CRYPTER_KEY);
let toastId = "";

export const encrypt = (text) => {
  let cryptText = cryptlib.encrypt(text, key, iv);
  return cryptText.replace(/\//g, "_spike_");
};

export const decrypt = (text) => {
  let decrptText = text.replace(/_spike_/g, "/");
  return cryptlib.decrypt(decrptText, key, iv);
};

//used to encryption of localstorage data
export const encryptedData = (data) => {
  return cryptr.encrypt(data);
};

//used to decrypt localstorage data
export const decryptedData = (data) => {
  return cryptr.decrypt(data);
};

// toastr messages for error
export const showErrorToast = (errorMessage) => {
  if (!toast.isActive(toastId)) {
    toast.dismiss()
    toastId = toast.error(errorMessage, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
  setTimeout(() => {
    toastId = ''
    // toast.dismiss()
  }, 3000);
};
// Tostr without condition
export const showErrorMessage = (errorMessage) => {

  if (!toast.isActive(toastId)) {    
    toast.dismiss()
    toastId = toast.error(errorMessage, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
  setTimeout(() => {
    toastId = ''
    // toast.dismiss()
  }, 3000);
};

// toastr messages for success
export const showSuccessToast = (message) => {
  if (!toast.isActive(toastId)) {
    // alert("s")
    toast.dismiss()
    toastId = toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
  setTimeout(() => {
    toastId = ''
  }, 3000);
};

export const setLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  const encodedData = encryptedData(value);
  localStorage.setItem(key, encodedData);
};

const generateRandomString = () => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

export const generateTimestamp = (fileName) => {
  let extension = fileName.split(".").pop();
  let newFileName =
    moment().valueOf() + generateRandomString() + "." + extension;
  return newFileName;
};
// used to get localstorage item
export const getLocalStorage = (key) => {
  if (key) {
    let data = localStorage.getItem(key);
    if (data) {
      data = JSON.parse(decryptedData(data));
      return data;
    }
  }
  return null;
};

// used to remove localstorage item
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// used to clear localstorage
export const clearLocalStorage = () => {
  localStorage.clear();
};

export const isValidURL = (URL) => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(URL);
};

export const isURL = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return pattern.test(str);
};

// export const extractURL = str => {
//   var urlRegex = /(https?:\/\/[^\s]+)/g;
//   var linkText = str.match(urlRegex);
//   return linkText;
// };

export const extractURL = (str) => {
  let getString = Array.isArray(str) ? str[0] : str;

  if (getString) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    var linkText = getString.match(urlRegex);

    if (Array.isArray(linkText)) {
      return linkText[0];
    } else {
      return linkText;
    }
  }
  return false;
};

export const isLinkExist = (str) => {
  if (str) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var linkText = str.match(urlRegex);
    if (linkText) {
      return true;
    } else {
      return false;
    }
  }
};

export const isExistURL = (URL) => {
  // var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  var regexp = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?\S/;
  return regexp.test(URL);
};

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const capitalizeFirstLetter = (string) => {
  let value = string;
  if (string) value = string.charAt(0).toUpperCase() + string.slice(1);
  return value;
};

export const range = (start, end) => {
  const inc = (end - start) / Math.abs(end - start);
  // return Array(end).fill(0).map((e,i)=>i+1)
  return Array.from(
    Array(Math.abs(end - start) + 1),
    (_, i) => start + i * inc
  );
};
