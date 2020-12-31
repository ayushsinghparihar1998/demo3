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
  blogListing: {
    url: "elp/superadmin_getblog",
    method: "POST",
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
  superadminprofessionaluserdetail: {
    url: "elp/superadminprofessionaluserdetail",
    method: "POST",
    data: {
      userid: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
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
  superadminchangepassword: {
    url: "elp/superadminchangepassword",
    method: "POST",
    data: { user_id: "", password: "" },
    showResultMessage: true,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadmingetcorporatedomain: {
    url: "elp/superadmingetcorporatedomain",
    method: "GET",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminchangestatusCorporatedomain: {
    url: "elp/superadminchangestatusCorporatedomain",
    method: "POST",
    data: { cd_id: "", cd_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
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
    showResultMessage: false,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
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

  getAdminPaymentDetail: {
    url: "elp/superadmin_getpaymentdetails",
    method: "POST",
    data: { count: "", offset: "" },
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
    showResultMessage: false,
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
    showResultMessage: false,
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
    showResultMessage: false,
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
    showErrorMessage: false,
  },

  getblogcategory: {
    url: "elp/getblogcategory",
    method: "POST",
    data: {},
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadmin_get_press_blog: {
    url: "elp/superadmin_get_press_blog",
    method: "POST",
    data: { offset: "", count: "", category: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadmin_getblog: {
    url: "elp/superadmin_getblog",
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
  superadmingetcorporateappointmentlist: {
    url: "elp/superadmingetcorporateappointmentlist",
    method: "POST",
    data: { count: "", offset: "", cs_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminCorporateappointmentchangestatus: {
    url: "elp/superadminCorporateappointmentchangestatus",
    method: "POST",
    data: { cs_id: "", cs_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
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
  blogListing: {
    url: "elp/superadmin_getblog",
    method: "POST",
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
  superadminprofessionaluserdetail: {
    url: "elp/superadminprofessionaluserdetail",
    method: "POST",
    data: {
      userid: "",
    },
    showResultMessage: false,
    showErrorMessage: false,
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
  superadminchangepassword: {
    url: "elp/superadminchangepassword",
    method: "POST",
    data: { user_id: "", password: "" },
    showResultMessage: true,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadmingetcorporatedomain: {
    url: "elp/superadmingetcorporatedomain",
    method: "GET",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminchangestatusCorporatedomain: {
    url: "elp/superadminchangestatusCorporatedomain",
    method: "POST",
    data: { cd_id: "", cd_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
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
    showResultMessage: false,
    showErrorMessage: false,
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
    showResultMessage: false,
    showErrorMessage: false,
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
  superadmingetcorporatedomain: {
    url: "elp/superadmingetcorporatedomain",
    method: "POST",
    data: { count: "", offset: "" },
    showResultMessage: false,
    showErrorMessage: true,
  },

  superadmindeletecorporatedomain: {
    url: "elp/superadmindeletecorporatedomain",
    method: "POST",
    data: { count: "", offset: "" },
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
    showResultMessage: false,
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
    showResultMessage: false,
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
    showResultMessage: false,
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

  superadmingetcorporateappointmentlist: {
    url: "elp/superadmingetcorporateappointmentlist",
    method: "POST",
    data: { count: "", offset: "", cs_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
  },
  superadminCorporateappointmentchangestatus: {
    url: "elp/superadminCorporateappointmentchangestatus",
    method: "POST",
    data: { cs_id: "", cs_status: "" },
    showResultMessage: false,
    showErrorMessage: false,
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

  readAllNotifications: {
    url: "elp/read_notification",
    method: "POST",
    data: {},
    showResultMessage: true,
    showErrorMessage: false,
  },

  pressBlogDetail: {
    url: "elp/getpressblogdetails",
    method: "POST",
    data: {"pbl_id":""},
    showResultMessage: false,
    showErrorMessage: false,
  },
};
