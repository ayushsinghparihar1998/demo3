export default {
  login: {
    url: 'elp/listner_login',
    method: 'POST',
    data: {
      email: '',
      password: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  professionalLogin: {
    url: 'elp/professional_login',
    method: 'POST',
    data: {
      email: '',
      password: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },

  userLogin: {
    url: 'elp/customer_login',
    method: 'POST',
    data: {
      email: '',
      password: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },

  forgotpassword: {
    url: 'elp/forgotpassword',
    method: 'POST',
    data: {
      email: '',
    },
    showResultMessage: true,
    showErrorMessage: true
  },

  resetpassword: {
    url: 'elp/resetpassword',
    method: 'POST',
    data: {
      userid: '',
      email: '',
      password: '',
    },
    showResultMessage: true,
    showErrorMessage: true
  },

  listnerSignup: {
    url: '/elp/listner_register',
    method: 'POST',
    data: {
      device_token: '',
      device_type: '',
      email: '',
      u_birthdate: '',
      password: '',
      u_school_code: '',
      uc_cat_name: [],
      screen_name: '',
      question: []
    },
    showResultMessage: true,
    showErrorMessage: true
  },
  logout: {
    url: 'elp/logout',
    method: 'GET',
    data: {
      email: '',
      password: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  getQuestion: {
    url: 'elp/getquestionlist',
    method: 'GET',
    data: {
    },
    showResultMessage: false,
    showErrorMessage: true
  },

  submitQuestion: {
    url: 'elp/submitquestion',
    method: 'POST',
    data: {
      question_submit: []
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  professionalSignup: {
    url: 'elp/professional_register',
    method: 'POST',
    data: {
      device_token: '',
      device_type: '',
      email: '',
      u_birthdate: '',
      password: '',
      u_school_code: '',
      uc_cat_name: [],
      screen_name: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  userSignup: {
    url: '/elp/customer_register',
    method: 'POST',
    data: {
      device_token: '',
      device_type: '',
      email: '',
      u_birthdate: '',
      password: '',
      u_school_code: '',
      u_username: '',
    },
    showResultMessage: true,
    showErrorMessage: true
  },
  getRecentJoinUsers: {
    url: 'elp/getrecentjoinUser',
    method: 'GET',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
  getListnerDashBoard: {
    url: 'elp/listner_dashboard',
    method: 'GET',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
  getUserDashBoard: {
    url: 'elp/customer_dashboard',
    method: 'GET',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
  getProfesionalDashBoard: {
    url: 'elp/professional_dashboard',
    method: 'GET',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
  getprofile: {
    url: 'elp/getprofile',
    method: 'GET',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },

  getListnerListing: {
    url: 'elp/superadmin_getlistenerlist',
    method: 'POST',
    data: {
      count: '',
      offset: ''
    },
    showResultMessage: false,
    showErrorMessage: true
  },

  adminLogin: {
    url: 'elp/superadmin_login',
    method: 'POST',
    data: {
      email: '',
      password: '',
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  getProfessionalListing: {
    url: 'elp/superadmin_getprofessionalist',
    method: 'POST',
    data: {
      count: '',
      offset: ''
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  getCustomerListing: {
    url: 'elp/superadmin_getcustomerlist',
    method: 'POST',
    data: {
      count: '',
      offset: ''
    },
    showResultMessage: false,
    showErrorMessage: true
  },
  adminChangeUserStatus: {
    url: 'elp/superadmin_changeuserstatus?userid=:userid&u_status=:u_status',
    method: 'POST',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
  adminUserDelete: {
    url: 'elp/superadmin_deleteuser?userid=:userid&u_status=:u_status',
    method: 'POST',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },

  getProfileById: {
    url: 'elp/superadmin_userdetail?userid=:userid',
    method: 'POST',
    data: {},
    showResultMessage: false,
    showErrorMessage: true
  },
};
