export default {
  email: {
    required: "Please enter email address.",
    invalid: "Please enter a valid email address.",
  },
  username: {
    required: "Please enter your user name.",
  },
  u_birthdate: {
    required: "Please enter a valid age.",
  },
  kt_price: {
    required: "Please enter a price.",
  },
  kt_image_url: {
    required: "Please upload a image.",
  },
  kt_desc: {
    required: "Please enter kit description.",
  },
  kt_name: {
    required: "Please enter a valid name.",
    // alphaOnly: "Please enter a valid screen name.",
  },
  kt_overview : {
    required: "Please enter kit overview.",
  },
  kt_subheading:{
    required: "Please enter kit sub-heading.",
  },
  kits_price_month:{
    kp_max_range_month : {
      required: "Please Select Minimun 3 Months."
    },
    kp_price:{
      required: "Please enter kit price.",
      balance : 'Price should be greater than Discount Price',
    },
    kp_discount:{
      required: "Please enter kit discount.",
      balance : 'Discount price should be lower than of original.'
    }
  },
  // : "",
  // : "",
  // kt_image_url: "",
  // kt_price: "",
  // kits_services: "",
  screen_name: {
    required: "Please enter  name.",
    alphaOnly: "Please enter a valid screen name.",
  },
  professional_keyword: {
    required: "Please enter atleast one keyword.",
    validtext: "Please enter some valid text.",
  },
  professional_cat_name: {
    required: "Please select atleast one category.",
  },
  u_image: {
    required: "Please upload a profile image.",
  },
  u_bio: {
    required: "Please write a bio about the professional.",
  },
  u_lang: {
    required: "Please enter atleast one language.",
    validtext: "Please enter some valid text.",
  },
  u_education: {
    required: "Please write something about the professional's qualification.",
  },
  u_work_experience: {
    required: "Please enter a valid experience in years.",
  },
  u_area_service: {
    required: "Please enter a area for service.",
    validtext: "Please enter some valid text.",
  },
  u_mobile: {
    required: "Please enter mobile number.",
    invalid: "Please enter a valid mobile number.",
  },

  password: {
    required: "Please enter password.",
    newPassword: "Please enter new password.",
    oldPassword: "Please enter current password.",
    confirmNewPassword: "Please enter confirm new password.",
    passwordPattern:
      "Password should be min 6 characters long and keep your password strong",
    // "Password should be min 8 characters long with one special character, number, lower and upper case letter.",
    //
    spaceAvoid: "Mismatch new password and confirm new password.",
    confirmed: "Password and Confirm password do not match.",
    spacialChar: "Password and Confirm password do not match.",
  },
  screenName: {
    required: "Please enter screen name.",
    alphaOnly: "Please enter a valid screen name.",
  },
  required: "Please enter required field.",
  category: {
    required: "Please enter category.",
    alphaOnly: "Please enter a valid company name.",
  },
  day: {
    required: "Please select day",
  },
  month: {
    required: "Please select month",
  },
  year: {
    required: "Please select year",
  },
  username: {
    required: "Please enter username.",
  },
  cd_domain_name: {
    required: "Please enter domain name.",
  },
  cd_audio_min: {
    required: "Please enter audio time in minutes.",
  },
  cd_video_min: {
    required: "Please enter video time in minutes.",
  },
  cd_audio_status: {
    required: "Please select audio status.",
  },
  cd_video_status: {
    required: "Please select video status.",
  },
  title: {
    required: "Please enter title.",
  },
  desc: {
    required: "Please write a brief description.",
  },
  writtenby: {
    required: "Please enter the Author/Publication name.",
    blogRequired:"Please enter the Author's name."
  },
  cat: {
    required: "Please select atleast one category.",
  },
  image: {
    required: "Please upload a blog image.",
  },
  pl_title: {
    required: "Please enter a plan title.",
  },
  pl_price: {
    required: "Please enter price.",
    correct: "Please enter a valid price",
  },
  vl_title: {
    required: "Please enter title.",
  },
  vl_video_url: {
    required: "Please enter video url.",
    correct_url: "Please enter a valid youtube video url",
    correct_you_url: "Please enter a youtube url",
  },
  vl_thumbnail_url: {
    required: "Please upload image.",
  },

  as_title: {
    required: "Please enter a title.",
  },
  as_test_price: {
    required: "Please enter a valid test price.",
  },
  as_total_marks: {
    required: "Please enter total test mark.",
  },

  as_type: {
    required: "Please select a test type.",
  },
  as_cat_name: {
    required: "Please select a catagory.",
  },
  vl_desc: {
    required: "Please enter description.",
  },
  plan_type: {
    required: "Please select plan type.",
  },
  plan_cat_name: {
    required: "Please select atleast one catagory.",
  },
  pp_month:{
    pp_max_range_month : {
      required : 'Please Select Minimun 1 months'
    },
    pp_price : {
      required: "Please enter Plan discount.",
      balance : 'Original Price Should be greater than of discount price.'
    },
    pp_discount : {
      required: "Please enter Plan discount.",
      balance : 'Discount price should be lower than of original.'
    }
  },
  pl_desc_details: {
    required: "Please enter plan description.",
  },
  pl_save: {
    required: "Please enter plan offer.",
    correct : "Please enter a valid offer"
  },
  ques_answ : {
    correct_ans : {
      required : 'Please Tick At least 1 Answer'
    },
    ques : {
      required : 'Please Enter Question'
    },
    answ : {
      required : 'Please Enter Answer'
    }
  },
  pass_err : {
    passageTitle : {
      required : 'Please Enter Title'
    },
    passageDescribe : {
      required : 'Please Enter Description'
    }
  }
};
