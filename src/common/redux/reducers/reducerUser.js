import { LOGIN, LOGIN_SUCCESS, LOGOUT, GET_QUESTION } from '../types';
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
  console.log("reduceData", action)
  switch (action.type) {
    case LOGIN:
      if (action && action.data && action.data.data) {
        const userInfo = action.data.data;
        setLocalStorage('userInfo', action.data.data);
        state.userData = userInfo;
      }
      console.log("reduxState111", state)
      return { ...state };

    // case LOGIN_SUCCESS:
    //   if (action && action.data && action.data.data) {
    //     const userInfo = action.data.data;
    //     setLocalStorage('userInfo', action.data.data);
    //     state.userData = userInfo;
    //   }
    //   console.log("reduxState", state)
    //   return { ...state };

    case LOGOUT:
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
