export default {
  login: {
    url: "elp/listner_login",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  professionalLogin: {
    url: "elp/professional_login",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  userLogin: {
    url: "elp/customer_login",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  forgotpassword: {
    url: "elp/forgotpassword",
    method: "POST",
    data: {
      email: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  resetpassword: {
    url: "elp/resetpassword",
    method: "POST",
    data: {
      userid: "",
      email: "",
      password: "",
      authcode: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  listnerSignup: {
    url: "/elp/listner_register",
    method: "POST",
    data: {
      device_token: "",
      device_type: "",
      email: "",
      u_birthdate: "",
      password: "",
      u_school_code: "",
      uc_cat_name: [],
      screen_name: "",
      question: [],
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  logout: {
    url: "elp/logout",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getQuestion: {
    url: "elp/getquestionlist",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },

  submitQuestion: {
    url: "elp/submitquestion",
    method: "POST",
    data: {
      question_submit: [],
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  professionalSignup: {
    url: "elp/professional_register",
    method: "POST",
    data: {
      device_token: "",
      device_type: "",
      email: "",
      u_birthdate: "",
      password: "",
      u_school_code: "",
      uc_cat_name: [],
      screen_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  userSignup: {
    url: "/elp/customer_register",
    method: "POST",
    data: {
      device_token: "",
      device_type: "",
      email: "",
      u_birthdate: "",
      password: "",
      u_school_code: "",
      u_username: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getRecentJoinUsers: {
    url: "elp/getrecentjoinUser",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getListnerDashBoard: {
    url: "elp/listner_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getUserDashBoard: {
    url: "elp/customer_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getProfesionalDashBoard: {
    url: "elp/professional_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getprofile: {
    url: "elp/getprofile",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },

  getListnerListing: {
    url: "elp/superadmin_getlistenerlist",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  adminLogin: {
    url: "elp/superadmin_login",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  // new
  getBlockuserListing: {
    url: "elp/superadmin_getblockuserlisting",
    method: "POST",
    data: {
      count: "",
      offset: "",
      block_type: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  getReviewListing: {
    url: "elp/superadmin_getreviewlisting",
    method: "POST",
    data: {
      count: "",
      offset: "",
      review_type: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getRatingdetails: {
    url: "elp/superadmin_getratingdetails",
    method: "POST",
    data: {
      count: "",
      offset: "",
      review_type: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  changeStatusReview: {
    url: "elp/superadmin_changestatusreview",
    method: "POST",
    data: {
      rv_id: "",
      rv_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  changestatusrating: {
    url: "elp/superadmin_changestatusrating",
    method: "POST",
    data: {
      ur_id: "",
      ur_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  blockUserStatus: {
    url: "elp/superadmin_Blockuserstatus",
    method: "POST",
    data: {
      userid: "",
      status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  blockReasonUser: {
    url: "elp/add_blockreasonuser",
    method: "POST",
    data: {
      br_reason: "",
      br_comment: "",
      br_from_id: "",
      br_to_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  addReview: {
    url: "elp/addreview",
    method: "POST",
    data: {
      rv_text: "",
      rv_from_id: "",
      rv_to_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  getReview: {
    url: "elp/getreview",
    method: "POST",
    data: { count: "", offset: "", to_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },

  // end new

  getProfessionalListing: {
    url: "elp/superadmin_getprofessionalist",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getCustomerListing: {
    url: "elp/superadmin_getcustomerlist",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  adminChangeUserStatus: {
    url: "elp/superadmin_changeuserstatus?userid=:userid&u_status=:u_status",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  adminUserDelete: {
    url: "elp/superadmin_deleteuser?userid=:userid&u_status=:u_status",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },

  getProfileById: {
    url: "elp/superadmin_userdetail?userid=:userid",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },

  subscribe: {
    url: "elp/usersubscriber",
    method: "POST",
    data: { email: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  editUserDetails: {
    url: "elp/editprofile",
    method: "POST",
    data: {
      email: "",
      // password: '',
      u_birthdate: "",
      u_name: "",
      u_gender: "",
      id: "",
      u_bio: "",
      u_city: "",
      u_country: "",
      u_mobile: "",
      u_state: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  getCountry: {
    url: "elp/getcountry",
    method: "GET",
    data: { email: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getState: {
    url: "elp/getstate",
    method: "POST",
    data: { country_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getCity: {
    url: "elp/getcity",
    method: "POST",
    data: { state_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getCalendarEvents: {
    url: "elp/get_event",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  postCalendarEvents: {
    url: "elp/add_event",
    method: "POST",
    data: {
      date: "",
      starting_at: "",
      end_at: "",
      duration: "",
      recurring: "",
      repeat: "",
      sl_desc: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  adminUserDeleteReason: {
    url:
      "elp//superadmin_addreasonuser?userid=:userid&ui_status=:ui_status&ui_comment=:ui_comment",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  adminGetCategory: {
    url: "elp/superadmin_getcategory",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  searchProfessionals: {
    url: "/elp/searchprofessionals",
    method: "POST",
    data: {
      category: "",
      name: "",
      country: "",
      state: "",
      city: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  searchlistener: {
    url: "elp/searchlistener",
    method: "POST",
    data: {
      search_keyword: "",
      order_by: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },

  emailVerification: {
    url: "elp/emailverification",
    method: "POST",
    data: { email: "", authcode: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  changepassword: {
    url: "elp/changepassword",
    method: "POST",
    data: {
      password: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  addrating: {
    url: "elp/addrating",
    method: "POST",
    data: {
      rating_count: "",
      to_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  blockChat: {
    url: "elp/superadmin_Blockuserstatus",
    method: "POST",
    data: {
      userid: "",
      status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  reportUser: {
    url: "elp/add_blockreasonuser",
    method: "POST",
    data: {
      br_reason: "",
      br_comment: "",
      br_from_id: "",
      br_to_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  getSurveyList: {
    url: "elp/getsurveylist",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },

  submitSurvey: {
    url: "elp/submitsurvey",
    method: "POST",
    data: {
      survey_submit: []
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  submitRatings: {
    url: "elp/addrating",
    method: "POST",
    data: {
      rating_count: "",
      to_id: "",
      from_id: ''
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getAdminPaymentDetail: {
    url: "elp/superadmin_getpaymentdetails",
    method: "GET",
    data: {

    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  submitReview: {
    url: "elp/addreview",
    method: "POST",
    data: {
      rv_text: "",
      rv_from_id: "",
      rv_to_id: ""
    },
    showResultMessage: false,
    showErrorMessage: true,
  }
};
