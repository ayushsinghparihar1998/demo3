import { getLocalStorage } from "../helpers/Utils";

const getUserProfile = () => getLocalStorage('userInfo') ||
  getLocalStorage('userInfoProff') ||
  getLocalStorage('customerInfo') ||
  getLocalStorage('userInfoAdmin');

export default getUserProfile;