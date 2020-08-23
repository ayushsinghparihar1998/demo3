import ELPViewApiService from '../../services/apiService';
import {
  LOGIN,
  PROFESSIONAL_LOGIN,
  LISTNER_SIGNUP,
  PROFESSIONAL_SIGNUP,
  ADMIN_LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  GET_QUESTION,
  USER_LOGIN,
  USER_SIGNUP,
  GET_RECENT_JOIN,
  GET_LISTNER_DASHBOARD,
  GET_PROFILE,
  GET_USER_DASHBOARD,
  GET_PROFESIONAL_DASHBOARD,
  GET_LISTNER_LISTING,
  GET_PROFESSIONAL_LISTING,
  GET_USER_LISTING,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  ADMIN_CHANGE_USER_STATUS,
  ADMIN_USER_DELETE,
  GET_PROFILE_BY_ID,
  UPDATE_USER_DETAILS,
} from '../types';

export const actionLogin = (data) => async (dispatch) => {
  const request = ELPViewApiService('login', data);
  dispatch({ type: LOGIN, payload: request });
  return request;
};

export const actionListnerSignup = (data) => async (dispatch) => {
  const request = ELPViewApiService('listnerSignup', data);
  dispatch({ type: LISTNER_SIGNUP, payload: request });
  return request;
};
export const actionProfessionalLogin = (data) => async (dispatch) => {
  const request = ELPViewApiService('professionalLogin', data);
  dispatch({ type: PROFESSIONAL_LOGIN, payload: request });
  return request;
};
export const actionUserLogin = (data) => async (dispatch) => {
  const request = ELPViewApiService('userLogin', data);
  dispatch({ type: USER_LOGIN, payload: request });
  return request;
};

export const actionProfessionalSignup = (data) => async (dispatch) => {
  const request = ELPViewApiService('professionalSignup', data);
  dispatch({ type: PROFESSIONAL_SIGNUP, payload: request });
  return request;
};

export const actionUserSignup = (data) => async (dispatch) => {
  const request = ELPViewApiService('userSignup', data);
  dispatch({ type: USER_SIGNUP, payload: request });
  return request;
};

export const actionListnerSignupSuccess = (data) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, data });
  return data;
};

export const actionLogout = (data) => async (dispatch) => {
  const request = await 'test';
  dispatch({ type: LOGOUT, payload: request.data });
  return request;
};

export const actionGetQuestion = () => async (dispatch) => {
  const request = ELPViewApiService('getQuestion');
  dispatch({ type: GET_QUESTION, payload: request.data });
  return request;
};

export const actionSubmitQuestion = (data) => async (dispatch) => {
  const request = ELPViewApiService('submitQuestion', data);
  dispatch({ type: GET_QUESTION, payload: request.data });
  return request;
};

export const actionGetRecentJoin = () => async (dispatch) => {
  const request = ELPViewApiService('getRecentJoinUsers');
  dispatch({ type: GET_RECENT_JOIN, payload: request.data });
  return request;
};

export const actionGetListnerDashBoard = () => async (dispatch) => {
  const request = ELPViewApiService('getListnerDashBoard');
  dispatch({ type: GET_LISTNER_DASHBOARD, payload: request.data });
  return request;
};

export const actionGetProfile = () => async (dispatch) => {
  const request = ELPViewApiService('getprofile');
  dispatch({ type: GET_PROFILE, payload: request.data });
  return request;
};
export const actionGetUserDashBoard = () => async (dispatch) => {
  const request = ELPViewApiService('getUserDashBoard');
  dispatch({ type: GET_USER_DASHBOARD, payload: request.data });
  return request;
};
export const actionGetProfesionalDashBoard = () => async (dispatch) => {
  const request = ELPViewApiService('getProfesionalDashBoard');
  dispatch({ type: GET_PROFESIONAL_DASHBOARD, payload: request.data });
  return request;
};

export const actionGetListnerListing = (data) => async (dispatch) => {
  const request = ELPViewApiService('getListnerListing', data);
  dispatch({ type: GET_LISTNER_LISTING, payload: request.data });
  return request;
};
export const actionAdminLogin = (data) => async (dispatch) => {
  const request = ELPViewApiService('adminLogin', data);
  dispatch({ type: ADMIN_LOGIN, payload: request });
  return request;
};
export const actionGetCustomerListing = (data) => async (dispatch) => {
  const request = ELPViewApiService('getCustomerListing', data);
  dispatch({ type: GET_USER_LISTING, payload: request.data });
  return request;
};

export const actionGetProfessionalListing = (data) => async (dispatch) => {
  const request = ELPViewApiService('getProfessionalListing', data);
  dispatch({ type: GET_PROFESSIONAL_LISTING, payload: request.data });
  return request;
};
export const actionAdminChangeUserStatus = (data) => async (dispatch) => {
  const request = ELPViewApiService('adminChangeUserStatus', data);
  dispatch({ type: ADMIN_CHANGE_USER_STATUS, payload: request.data });
  return request;
};
export const actionadminUserDelete = (data) => async (dispatch) => {
  const request = ELPViewApiService('adminUserDelete', data);
  dispatch({ type: ADMIN_USER_DELETE, payload: request.data });
  return request;
};
export const actionForGotPassword = (data) => async (dispatch) => {
  const request = ELPViewApiService('forgotpassword', data);
  dispatch({ type: FORGOT_PASSWORD, payload: request.data });
  return request;
};

export const actionResetPassword = (data) => async (dispatch) => {
  const request = ELPViewApiService('resetpassword', data);
  dispatch({ type: RESET_PASSWORD, payload: request.data });
  return request;
};

export const actionGetProfileById = (data) => async (dispatch) => {
  const request = ELPViewApiService('getProfileById', data);
  dispatch({ type: GET_PROFILE_BY_ID, payload: request.data });
  return request;
};
export const actionUpdateUserDetails = (data) => async (dispatch) => {
  console.log('request', data);
  const request = ELPViewApiService('editUserDetails', data);
  console.log('request', request);
  dispatch({ type: UPDATE_USER_DETAILS, payload: data });
  return request;
};

// export const actionResetPassword = (data) => async (dispatch) => {
//   const request = ELPViewApiService('resetpassword', data);
//   dispatch({ type: RESET_PASSWORD, payload: data });
//   return request;
// };
