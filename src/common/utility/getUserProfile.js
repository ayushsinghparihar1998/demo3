import { getLocalStorage } from "../helpers/Utils";

export default getLocalStorage('userInfo') ||
  getLocalStorage('userInfoProff') ||
  getLocalStorage('customerInfo') ||
  getLocalStorage('userInfoAdmin');