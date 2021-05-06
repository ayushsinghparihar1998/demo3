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

  userLogin: {
    url: "elp/customer_login",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: true,
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

  filteredsearchlistener: {
    url: "elp/searchlistener",
    method: "POST",
    data: {
      search_keyword: "",
      order_by: "",
    },
    showResultMessage: false,
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
    url: "elp/block-user",
    method: "POST",
    data: {
      from_user_id: "",
      to_user_id: "",
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
      survey_submit: [],
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
      from_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  getBlogDetail: {
    url: "elp/getBlogdetails",
    method: "POST",
    data: { bl_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getCategoryList: {
    url: "elp/autoconnectgetallcategories",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },

  getListenerCategoryList: {
    url: "elp/getcategories",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  addCategory: {
    url: "elp/addcategories",
    method: "POST",
    data: {
      uc_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  listnerDashboardDetail: {
    url: "elp/listner_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  customerDashboardDetail: {
    url: "elp/customer_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  professionalDashboardDetail: {
    url: "elp/professional_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  resendVerificationMail: {
    url: "elp/resendemail",
    method: "GET",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  corporateprofessionaluserdetail: {
    url: "elp/corporateprofessionaluserdetail",
    method: "POST",
    data: {
      userid: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },

  corporategetprofessionallist: {
    url: "elp/corporategetprofessionallist",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },

  corporateappointmentschedule: {
    url: "elp/corporateappointmentschedule",
    method: "POST",
    data: {
      cs_pro_u_id: "",
      cs_pro_name: "",
      cs_pro_email_id: "",
      cs_subject: "",
      cs_description: "",
      cs_date: "",
      cs_time: [{ cs_time_slot: "" }],
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getnotificationlisting: {
    url: "elp/getnotificationlisting",
    method: "POST",
    data: { user_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  switchtocorporatemember: {
    url: "elp/switchtocorporatemember",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  getpressblog: {
    url: "elp/getpressblog",
    method: "POST",
    data: { offset: 0, count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getblog: {
    url: "elp/getblog",
    method: "POST",
    data: { offset: 0, count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getlatestblog: {
    url: "elp/getlatestblog",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  getpressblogcategory: {
    url: "elp/getpressblogcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
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

  getBlogdetails: {
    url: "elp/getBlogdetails",
    method: "POST",
    data: { bl_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  corporateLogin: {
    url: "elp/corporatecustomer_register",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: true,
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
    showResultMessage: true,
    showErrorMessage: true,
  },
  changepassword: {
    url: "elp/changepassword",
    method: "POST",
    data: {
      password: "",
      old_password: "",
    },
    showResultMessage: false,
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
  submitReview: {
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
  submitRatings: {
    url: "elp/addrating",
    method: "POST",
    data: {
      rating_count: "",
      to_id: "",
      from_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  submitReview: {
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
  getBlogList: {
    url: "elp/getblog",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  getblogcategory: {
    url: "elp/getblogcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  getpressblogdetails: {
    url: "elp/getpressblogdetails",
    method: "POST",
    data: { pbl_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },

  professionalSignup: {
    url: "elp/professional_register",
    method: "POST",
    data: {
      from_user_id: "",
      to_user_id: "",
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
      survey_submit: [],
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
      from_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  getBlogDetail: {
    url: "elp/getBlogdetails",
    method: "POST",
    data: { bl_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getCategoryList: {
    url: "elp/autoconnectgetallcategories",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getListenerCategoryList: {
    url: "elp/getcategories",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  addCategory: {
    url: "elp/addcategories",
    method: "POST",
    data: {
      uc_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  listnerDashboardDetail: {
    url: "elp/listner_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  customerDashboardDetail: {
    url: "elp/customer_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  professionalDashboardDetail: {
    url: "elp/professional_dashboard",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  resendVerificationMail: {
    url: "elp/resendemail",
    method: "GET",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  corporateprofessionaluserdetail: {
    url: "elp/corporateprofessionaluserdetail",
    method: "POST",
    data: {
      userid: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },

  corporategetprofessionallistfilter: {
    url: "elp/corporategetprofessionallist",
    method: "POST",
    data: {
      count: 0,
      offset: 0,
      name: "",
      status: "",
      keyword: "",
      category: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },
  corporateappointmentschedule: {
    url: "elp/corporateappointmentschedule",
    method: "POST",
    data: {
      cs_pro_u_id: "",
      cs_pro_name: "",
      cs_pro_email_id: "",
      cs_subject: "",
      cs_description: "",
      cs_date: "",
      cs_time: [{ cs_time_slot: "" }],
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getnotificationlisting: {
    url: "elp/getnotificationlisting",
    method: "POST",
    data: { user_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  switchtocorporatemember: {
    url: "elp/switchtocorporatemember",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: true,
  },
  getpressblog: {
    url: "elp/getpressblog",
    method: "POST",
    data: { offset: 0, count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getblog: {
    url: "elp/getblog",
    method: "POST",
    data: { offset: 0, count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  getlatestblog: {
    url: "elp/getlatestblog",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  getpressblogcategory: {
    url: "elp/getpressblogcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
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

  getBlogdetails: {
    url: "elp/getBlogdetails",
    method: "POST",
    data: { bl_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  corporateLogin: {
    url: "elp/corporatecustomer_register",
    method: "POST",
    data: {
      email: "",
      password: "",
    },
    showResultMessage: true,
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
      u_image: "",
      u_cover_image: "",
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
  submitReview: {
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

  submitRatings: {
    url: "elp/addrating",
    method: "POST",
    data: {
      rating_count: "",
      to_id: "",
      from_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },

  getblogcategory: {
    url: "elp/getblogcategory",
    method: "POST",
    data: {
      rv_text: "",
      rv_from_id: "",
      rv_to_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getBlogList: {
    url: "elp/getblog",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  getnotificationlisting: {
    url: "elp/getnotificationlisting",
    method: "POST",
    data: { user_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  getblogcategory: {
    url: "elp/getblogcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  getBlogdetails: {
    url: "elp/getBlogdetails",
    method: "POST",
    data: { offset: "", count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },

  getpressblogdetails: {
    url: "elp/getpressblogdetails",
    method: "POST",
    data: { pbl_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getlatestblog: {
    url: "elp/getlatestblog",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },

  readAllNotifications: {
    url: "elp/read_notification",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  pressBlogDetail: {
    url: "elp/getpressblogdetails",
    method: "POST",
    data: { pbl_id: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  // superadmin

  superadmineditcorporatedomain: {
    url: "elp/superadmineditcorporatedomain",
    method: "POST",
    data: {
      cd_id: "",
      cd_domain_name: "",
      cd_audio_min: "",
      cd_video_min: "",
      cd_audio_status: "",
      cd_video_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminaddcorporatedomain: {
    url: "elp/superadminaddcorporatedomain",
    method: "POST",
    data: {
      cd_domain_name: "",
      cd_audio_min: "",
      cd_video_min: "",
      cd_audio_status: "",
      cd_video_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmingetcorporatedomaindetailsbyid: {
    url: "elp/superadmingetcorporatedomaindetailsbyid",
    method: "POST",
    data: {
      cd_id: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadmingetcorporatedomaindetailuserlist: {
    url: "elp/superadmingetcorporatedomaindetailuserlist",
    method: "POST",
    data: { count: "", offset: "", cd_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmincorporatecustomerregister: {
    url: "elp/superadmincorporatecustomerregister",
    method: "POST",
    data: { email: "", password: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmindeletecorporatedomain: {
    url: "elp/superadmindeletecorporatedomain",
    method: "POST",
    data: { cd_id: "", cd_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getSuperAdminCategories: {
    url: "elp/superadmin_getcategory",
    method: "GET",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  addCategorySuperAdmin: {
    url: "elp/superadmin_addcategory",
    method: "POST",
    data: {
      uc_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  blockUserStatusSuperAdmin: {
    url: "elp/superadmin_blockreasonchangestatus",
    method: "POST",
    data: {
      br_id: "",
      br_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  blogListing: {
    url: "elp/superadmin_getblog",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminprofessionaluserdetail: {
    url: "elp/superadminprofessionaluserdetail",
    method: "POST",
    data: {
      userid: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminchangepassword: {
    url: "elp/superadminchangepassword",
    method: "POST",
    data: { user_id: "", password: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminchangeprofessionalpassword: {
    url: "elp/superadminchangeprofessionalpassword",
    method: "POST",
    data: { user_id: "", password: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmingetprofessioanalcategory: {
    url: "elp/superadmingetprofessioanalcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminregisterprofessional: {
    url: "elp/superadminregisterprofessional",
    method: "POST",
    data: {
      email: "",
      password: "",
      u_birthdate: "",
      u_school_code: "",
      screen_name: "",
      u_lang: "",
      u_mobile: "",
      u_location: "",

      device_token: "",
      device_type: "",
      type: "",
      u_therapy_style: "",

      u_hourly_fee: "",
      u_work_experience: "",
      u_education: "",
      u_image: "",
      u_bio: "",
      u_area_service: "",

      professional_keyword: "",
      professional_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmineditprofessional: {
    url: "elp/superadmineditprofessional",
    method: "POST",
    data: {
      pro_u_id: "",
      email: "",
      u_birthdate: "",
      u_school_code: "",
      screen_name: "",
      u_lang: "",
      u_mobile: "",
      u_location: "",

      device_token: "",
      device_type: "",
      type: "",
      u_therapy_style: "",

      u_hourly_fee: "",
      u_work_experience: "",
      u_education: "",
      u_image: "",
      u_bio: "",
      u_area_service: "",

      professional_keyword: "",
      professional_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmingetcorporatedomain: {
    url: "elp/superadmingetcorporatedomain",
    method: "GET",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: false,
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
      rating_type: "",
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
  adminUserDeleteReason: {
    url:
      "elp/superadmin_addreasonuser?userid=:userid&ui_status=:ui_status&ui_comment=:ui_comment",
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
    showErrorMessage: false,
  },
  createBlog: {
    url: "elp/superadmin_addblog",
    method: "POST",
    data: {
      bl_title: "",
      bl_image: "",
      bl_desc: "",
      // bl_id: "",
      bl_written_by: "",
      blog_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  updateBlog: {
    url: "elp/superadmin_editblog",
    method: "POST",
    data: {
      bl_title: "",
      bl_image: "",
      bl_desc: "",
      bl_id: "",
      bl_written_by: "",
      blog_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  createPressBlog: {
    url: "elp/superadmin_add_press_blog",
    method: "POST",
    data: {
      pbl_title: "",
      pbl_image: "",
      pbl_desc: "",
      // pbl_id: "",
      pbl_written_by: "",
      press_blog_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  updatePressBlog: {
    url: "elp/superadmin_press_editblog",
    method: "POST",
    data: {
      pbl_title: "",
      pbl_image: "",
      pbl_desc: "",
      pbl_id: "",
      pbl_written_by: "",
      press_blog_cat_name: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getAdminPaymentDetail: {
    url: "elp/superadmin_getpaymentdetails",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminprofessionallisting: {
    url: "elp/superadminprofessionallisting",
    method: "POST",
    data: {
      count: "",
      offset: "",
      name: "",
      status: "",
      keyword: "",
      category: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmin_get_press_blog: {
    url: "elp/superadmin_get_press_blog",
    method: "POST",
    data: { offset: "", count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmin_getblog: {
    url: "elp/superadmin_getblog",
    method: "POST",
    data: { offset: "", count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmingetcorporateappointmentlist: {
    url: "elp/superadmingetcorporateappointmentlist",
    method: "POST",
    data: { count: "", offset: "", cs_status: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminCorporateappointmentchangestatus: {
    url: "elp/superadminCorporateappointmentchangestatus",
    method: "POST",
    data: { cs_id: "", cs_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmin_changeblogstatus: {
    url: "elp/superadmin_changeblogstatus",
    method: "POST",
    data: {
      bl_id: "",
      bl_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminchangestatusCorporatedomain: {
    url: "elp/superadminchangestatusCorporatedomain",
    method: "POST",
    data: { cd_id: "", cd_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmin_change_press_blogstatus: {
    url: "elp/superadmin_change_press_blogstatus",
    method: "POST",
    data: {
      pbl_id: "",
      pbl_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminadd_plan: {
    url: "elp/superadminadd_plan",
    method: "POST",
    data: {
      pl_title: "",
      pl_price: "",
      pl_desc_details: "",
      pl_save: "",
      plan_type: "",
      pl_pdf_doc: '',
      plan_cat_name: "",
      pl_video_min: "",
      pl_audio_min: "",
      pl_price_month: [
        {
          pp_min_range_month: '',
          pp_max_range_month: '',
          pp_discount: '',
          pp_price: ''
        }
      ]
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminedit_plan1: {
    url: "elp/superadminedit_plan",
    method: "POST",
    data: {
      pl_id: "",
      pl_title: "",
      pl_price: "",
      pl_desc_details: "",
      pl_save: "",
      plan_type: "",
      pl_pdf_doc: '',
      plan_cat_name: "",
      pl_video_min: "",
      pl_audio_min: "",
      pl_price_month: [
        {
          pp_min_range_month: '',
          pp_max_range_month: '',
          pp_discount: '',
          pp_price: ''
        }
      ]
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminedit_plan2: {
    url: "elp/superadminedit_plan",
    method: "POST",
    data: {
      pl_id: "",
      pl_title: "",
      pl_price: "",
      pl_desc_details: "",
      pl_save: "",
      plan_type: "",
      plan_cat_name: "",
      pl_video_min: "",
      pl_audio_min: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmin_getplandetails: {
    url: "elp/superadmin_getplandetails",
    method: "POST",
    data: { pl_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_planlist: {
    url: "elp/superadminget_planlist",
    method: "POST",
    data: { count: "", offset: "", plan_type: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminchange_planstatus: {
    url: "elp/superadminchange_planstatus",
    method: "POST",
    data: { pl_id: "", pl_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmindelete_planstatus: {
    url: "elp/superadmindelete_planstatus",
    method: "POST",
    data: { pl_id: "", pl_status: 3 },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminadd_doc: {
    url: "elp/superadminadd_doc",
    method: "POST",
    data: { u_image: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminadd_doc: {
    url: "elp/superadminadd_doc",
    method: "POST",
    data: {
      pu_title: "",
      pu_doc_url: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  // superadminadd_doc: {
  //   url: "elp/superadminadd_doc",
  //   method: "POST",
  //   data: { u_image: "" },
  //   showResultMessage: true,
  //   showErrorMessage: true,
  // },
  usersubscriber: {
    url: "elp/usersubscriber",
    method: "POST",
    data: { email: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },

  get_planlist: {
    url: "elp/get_planlist",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getplanlist_holisticbycondition: {
    url: "elp/getplanlist_holisticbycondition",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getplanlist_holisticdaily: {
    url: "elp/getplanlist_holisticdaily",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getplanlist_bycategory: {
    url: "elp/getplanlist_bycategory",
    method: "POST",
    data: { count: "", offset: "", plan_type: 1, plan_category: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  uploadkits_image: {
    url: "elp/uploadkits_image",
    method: "POST",
    data: { u_image: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminadd_kits: {
    url: "elp/superadminadd_kits",
    method: "POST",
    data: {
      kt_name: "",
      kt_desc: "",
      kt_image_url: "",
      kt_price: "",
      kt_overview: "",
      kt_subheading: '',
      kt_video_min: "",
      kt_audio_min: "",
      kits_service_name: [
        {
          ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "",
        },
      ],
      kits_price_month: [
        {
          kp_min_range_month: '',
          kp_max_range_month: '',
          kp_price: '',
          kp_discount: ''
        }
      ],
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_kitsdetails: {
    url: "elp/superadminget_kitsdetails",
    method: "POST",
    data: {
      kt_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminedit_kits: {
    url: "elp/superadminedit_kits",
    method: "POST",
    data: {
      kt_id: "",
      kt_name: "",
      kt_desc: "",
      // kt_services: "",
      kt_image_url: "",
      kt_price: "",
      kt_video_min: "",
      kt_audio_min: "",
      // kits_image_array :[],
      kits_service_name: [
        {
          ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "",
        },
      ],
      kt_overview: "",
      kt_subheading: '',
      kits_price_month: [
        {
          kp_min_range_month: '',
          kp_max_range_month: '',
          kp_price: '',
          kp_discount: ''
        }
      ],
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminkits_list: {
    url: "elp/superadminkits_list",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminchange_kitsstatus: {
    url: "elp/superadminchange_kitsstatus",
    method: "POST",
    data: {
      kt_id: "",
      kt_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmindelete_kitsstatus: {
    url: "elp/superadmindelete_kitsstatus",
    method: "POST",
    data: {
      kt_id: "",
      kt_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getkits_list: {
    url: "elp/getkits_list",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
  },

  getsubscription_pdf: {
    url: "elp/getsubscription_pdf",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminvlogs_list: {
    url: "elp/superadminvlogs_list",
    method: "POST",
    data: {
      count: "",
      offset: "",
      vl_type: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminchange_vlogsstatus: {
    url: "elp/superadminchange_vlogsstatus",
    method: "POST",
    data: {
      vl_id: "",
      vl_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmindelete_vlogsstatus: {
    url: "elp/superadmindelete_vlogsstatus",
    method: "POST",
    data: {
      vl_id: "",
      vl_status: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminedit_vlogs: {
    url: "elp/superadminedit_vlogs",
    method: "POST",
    data: {
      vl_title: "",
      vl_video_url: "",
      vl_thumbnail_url: "",
      vl_is_featured: "",
      vl_desc: "",
      vl_id: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminadd_vlogs: {
    url: "elp/superadminadd_vlogs",
    method: "POST",
    data: {
      vl_title: "",
      vl_video_url: "",
      vl_thumbnail_url: "",
      vl_is_featured: "",
      vl_desc: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminget_vlogsdetails: {
    url: "elp/superadminget_vlogsdetails",
    method: "POST",
    data: {
      vl_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getvlogs_details: {
    url: "elp/getvlogs_details",
    method: "POST",
    data: {
      vl_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getvlogs_list: {
    url: "elp/getvlogs_list",
    method: "POST",
    data: {
      count: "",
      offset: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getfeaturedvlogs_list: {
    url: "elp/getfeaturedvlogs_list",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  getlatest_vlogslist: {
    url: "elp/getlatest_vlogslist",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_assessmenttestlist: {
    url: "elp/superadminget_assessmenttestlist",
    method: "POST",
    data: { count: "", offset: "", as_type: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminadd_assessmenttest: {
    url: "elp/superadminadd_assessmenttest",
    method: "POST",
    data: {
      as_title: "",
      as_type: "",
      as_total_marks: "",
      as_test_price: "",
      as_cat_name: [],
      as_suggestion: [],
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminedit_assessmenttest: {
    url: "elp/superadminedit_assessmenttest",
    method: "POST",
    data: {
      as_id: "",
      as_title: "",
      as_type: "",
      as_total_marks: "",
      as_test_price: "",
      as_cat_name: [],
      as_suggestion: [],
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminassessmenttest_listdetail: {
    url: "elp/superadminassessmenttest_listdetail",
    method: "POST",
    data: {
      as_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminadd_assessmentqueans: {
    url: "elp/superadminadd_assessmentqueans",
    method: "POST",
    data: {
      assessment_id: "",
      as_que_ans: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminedit_assessmentqueans: {
    url: "elp/superadminedit_assessmentqueans",
    method: "POST",
    data: {
      as_que_id: "",
      as_id: "",
      as_que_ans: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_assessqueanstdetails: {
    url: "elp/superadminget_assessqueanstdetails",
    method: "POST",
    data: {
      as_que_id: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_assessqueanstlist: {
    url: "elp/superadminget_assessqueanstlist",
    method: "POST",
    data: { count: "", offset: "", as_test_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmindelete_assessqueansstatus: {
    url: "elp/superadmindelete_assessqueansstatus",
    method: "POST",
    data: { as_que_id: "", as_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadminchange_assessqueansstatus: {
    url: "elp/superadmin_assesstestchangestatus",
    method: "POST",
    data: { as_id: "", as_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  superadmindelete_assessteststatus: {
    url: "elp/superadmindelete_assessteststatus",
    method: "POST",
    data: { as_id: "", as_status: "" },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getassessmentlist_bycategory: {
    url: "elp/getassessmentlist_bycategory",
    method: "POST",
    data: { count: "", offset: "", assess_category: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getassessqueans_list: {
    url: "elp/getassessqueans_list",
    method: "POST",
    data: { count: "", offset: "", as_test_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  submitassess_test: {
    url: "elp/submitassess_test",
    method: "POST",
    data: {
      as_test_id: "",
      ar_no_attend_que: "",
      ar_skip_que: "",
      assess_submit: "",
    },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getAssessuser_testListbyid: {
    url: "elp/getAssessuser_testListbyid",
    method: "POST",
    data: { ar_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadminget_assessusertestlistbyid: {
    url: "elp/superadminget_assessusertestlistbyid",
    method: "POST",
    data: { ar_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  getuserassessment_resultlist: {
    url: "elp/getuserassessment_resultlist",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  superadmingetuser_assessresultlist: {
    url: "elp/superadmingetuser_assessresultlist",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  exportassessmentresult_pdf: {
    url: "elp/exportassessmentresult_pdf",
    method: "POST",
    data: { ar_id: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },
  exportSuperAdminCor_Docs: {
    url: "elp/superadminadd_doc_corporate",
    method: "POST",
    data: {
      pu_title_corporate: "",
      pu_doc_url_corporate: "",
    },
    showResultMessage: true,
    showErrorMessage: true,
  },
  getcorporate_pdf: {
    url: "elp/getcorporate_pdf",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminget_subscriberlist: {
    url: 'elp/superadminget_subscriberlist',
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  getkits_listdetails: {
    url: 'elp/getkits_listdetails',
    method: "POST",
    data: { kt_id: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  addKits_paymentdetails: {
    url: 'elp/addKits_paymentdetails',
    method: "POST",
    data: { kt_id: "", kt_amount: "", kt_month: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  addkitspurchase_paymentdetails: {
    elp: 'elp/addkitspurchase_paymentdetails',
    method: "POST",
    data: { kt_id: "", kt_amount: "", kt_month: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  kits_redeemcode: {
    url: 'elp/kits_redeemcode',
    method: "POST",
    data: { "gift_code": "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_quoteuserlist: {
    url: 'elp/superadminget_quoteuserlist',
    method: "POST",
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_usercouponlist: {
    url: 'elp/superadminget_usercouponlist',
    method: "POST",
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_assessmenttesthistory: {
    url: 'elp/superadminget_assessmenttesthistory',
    method: "POST",
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_userpurchasehistory: {
    url: 'elp/superadminget_userpurchasehistory',
    method: "POST",
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  uploadKits_images: {
    url: 'elp/uploadKits_images',
    method: "POST",
    data: [],
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_listnerparagraphtest: {
    url: 'elp/superadminget_listnerparagraphtest',
    method: 'POST',
    data: { "count": '', "offset": '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminadd_listnerparagraphtest: {
    url: 'elp/superadminadd_listnerparagraphtest',
    method: 'POST',
    data: { "lp_title": "", "lp_description": "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminedit_Listnerqueans: {
    url: 'elp/superadminedit_Listnerqueans',
    method: 'POST',
    data: {
      listner_paragraph_id: '',
      listner_que_id: '',
      listner_que_ans: [
        {
          ls_que_name: '',
          ls_correct_answer: "",
          ls_ans: [
            {
              option: ''
            }
          ]
        }
      ]
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminadd_Listnerqueans: {
    url: 'elp/superadminadd_Listnerqueans',
    method: 'POST',
    data: {
      listner_paragraph_id: '',
      listner_que_ans: [
        {
          ls_que_name: '',
          ls_correct_answer: "",
          ls_ans: [
            {
              option: ''
            }
          ]
        }
      ]
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_detailslistnerparagraphtest: {
    url: "elp/superadminget_detailslistnerparagraphtest",
    method: 'POST',
    data: { lp_id: '' }, //{lp_id:"",lp_title:"", lp_description:""},
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminedit_listnerparagraphtest: {
    url: 'elp/superadminedit_listnerparagraphtest',
    method: 'POST',
    data: { lp_id: "", lp_title: "", lp_description: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_quesanslistenerlist: {
    url: 'elp/superadminget_quesanslistenerlist',
    method: 'POST',
    data: { "count": '', "offset": '', "listner_paragraph_id": "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminparagraph_testdeletestatus: {
    url: 'elp/superadminparagraph_testdeletestatus',
    method: 'POST',
    data: { lp_id: '', lp_status: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminparagraph_testchangestatus: {
    url: 'elp/superadminparagraph_testchangestatus',
    method: 'POST',
    data: { lp_id: '', lp_status: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_quesanslistnerdetails: {
    url: 'elp/superadminget_quesanslistnerdetails',
    method: 'POST',
    data: { "count": '', "offset": '', "ql_id": '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminqueans_listnerdeletestatus: {
    url: 'elp/superadminqueans_listnerdeletestatus',
    method: 'POST',
    data: { ql_id: '', ql_status: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadmindelete_subscriberlist: {
    url: 'elp/superadmindelete_subscriberlist',
    method: 'POST',
    data: { s_id: '', s_status: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminqueans_listnerchangestatus: {
    url: 'elp/superadminqueans_listnerchangestatus',
    method: 'POST',
    data: { ql_id: '', ql_status: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  getlistner_paragraphtest: {
    url: 'elp/getlistner_paragraphtest',
    method: 'POST',
    data: { count: '', offset: '', listner_paragraph_id: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  getquesans_listnerlist: {
    url: 'elp/getquesans_listnerlist',
    method: 'POST',
    data: { count: '', offset: '', listner_paragraph_id: "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  submit_listnerTest: {
    url: 'elp/submit_listnerTest',
    method: 'POST',
    data: {
      "listner_paragraph_id": "",
      "lr_no_attend_que": '',
      "lr_skip_que": "",
      "lr_submit": [{ "que_id": "", "ans_id": "" }]
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  addquote_user: {
    url: 'elp/addquote_user',
    method: "POST",
    data: {
      "qu_name": "",
      "qu_email": "",
      "qu_phone_number": "",
      "qu_company_name": "",
      "qu_country": ""
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  addplan_paymentdetails: {
    url: 'elp/addplan_paymentdetails',
    method: "POST",
    data: { "pl_id": "", "pl_amount": "", "pl_month": "" },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminget_listnerresult: {
    url: 'elp//superadminget_listnerresult',
    method: 'POST',
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  getuser_orderhistory:{
    url : 'elp/getuser_orderhistory',
    method: 'POST',
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  getuser_kitscouponlist:{
    url : 'elp/getuser_kitscouponlist',
    method: 'POST',
    data: { count: '', offset: '' },
    showResultMessage: false,
    showErrorMessage: true
  },
  superadminchange_listnerteststatus:{
    url : 'elp/superadminchange_listnerteststatus',
    method: 'POST',
    data: { userid: '', u_listner_test: '' },
    showResultMessage: false,
    showErrorMessage: true
  }
};
