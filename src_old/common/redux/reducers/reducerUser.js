import { LOGIN, ADMIN_LOGIN, LOGOUT, GET_QUESTION ,LOGOUT_SUCCESS} from '../types';
import {
  setLocalStorage,
  getLocalStorage,
  clearLocalStorage
} from '../../helpers/Utils';

const INITIAL_STATE = {
  userData: getLocalStorage('userInfo') || {},
  competencyData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      if (action && action.data && action.data.data) {
        const userInfo = action.data.data;
        setLocalStorage('userInfo', action.data.data);
        state.userData = userInfo;
      }
      return { ...state };

    case ADMIN_LOGIN:
      if (action && action.data && action.data.data) {
        const userInfo = action.data.data;
        setLocalStorage('userInfoAdmin', action.data.data);
        state.userData = userInfo;
      }
      return { ...state };

    case LOGOUT:
      state.userData = {};
      state.competencyData = [];
      // clearLocalStorage();
      return { ...state };
    case LOGOUT_SUCCESS:
      state.userData = {};
      state.competencyData = [];
      clearLocalStorage();
      return { ...state };
    case GET_QUESTION:
      if (action.payload && action.payload.result) {
        state.competencyData = action.payload.result;
      }
      return { ...state };

    default:
      return state;
  }
};
