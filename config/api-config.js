const API_BASE_URL = "http://192.168.29.248"; //office
// const API_BASE_URL = "https://api-khaki-seven.vercel.app/"; //API
// const API_BASE_URL = "http://192.168.1.5"; //home
// const API_BASE_URL = "http://192.168.29.248:5173/"; //home
// const API_BASE_URL = "http://192.168.1.24:5173/"; //home
// const API_BASE_URL = 'http://192.168.29.248:3000/'; //office
// const API_BASE_URL = 'http://localhost:3000/';;
const DOMAIN = "https://beta.modievents.com/";
export default {
  // BASE_URL: API_BASE_URL,
  BASE_URL: API_BASE_URL + ":5173/",
  // MEDIA_URL: API_BASE_URL,
  MEDIA_URL: API_BASE_URL + ":5173/",
  APP_URL: API_BASE_URL + ":3006/",
  LOGIN_API_KEY: "UGFT6W-9GRT5D-VFRAQ6-KFL62T",
  IP_ADDRESS: {
    GET_IP_PRIMARY: "https://api.ipify.org?format=json",
    GET_IP_SECONDARY: "http://ipinfo.io/json",
  },
  ADMIN: {
    ROLES: {
      GET_ROLE_PERMISSIONS: "admin/role/permissions",
      GET_ROLES: "admin/role/list",
      CREATE_ROLES: "admin/role/",
      UPDATE_ROLES: "admin/role/",
      DELETE_ROLES: "admin/role/",
    },
    USERS: {
      VERIFY_TOKEN: "admin/verify/token",
      GET_USER_ROLE: "admin/user/role",
      GET_USERS: "admin/user/list",
      GET_USER_INFO: "admin/user/",
      CREATE_USERS: "admin/user/",
      GET_USER_ROUTES: "admin/user/routes",
      UPDATE_USERS: "admin/user/",
      DELETE_USERS: "admin/user/",
      GET_ROUTES: "admin/user/routes",
      USER_SIGNUP: "admin/user/signup",
      USER_LOGIN: "admin/user/login",
    },
    MODULES: {
      GET_MODULES: "admin/module/list",
      GET_MODULEACTIONS: "admin/module/actionslist",
    },
    EVENTS: {
      GET_EVENTS: "admin/event/list",
      GET_EVENT_INFO: "admin/event/",
      CREATE_EVENT: "admin/event/",
      APPROVE_EVENT: "admin/event/approve",
      PUBLISH_EVENT: "admin/event/publish",
      FINISH_EVENT: "admin/event/finish",
      RATE_EVENT: "admin/event/rate",
      UPDATE_EVENT: "admin/event/",
      DELETE_EVENT: "admin/event/",
    },
    CMS: {
      GET_BANNERS: "admin/cms/home/banners",
      GET_BOTTOM_SECTIONS: "admin/cms/home/bottom",
      UPLOAD_BANNER: "admin/cms/home/banners/",
      DELETE_BANNER: "admin/cms/home/banners/",
    },
    FORGOT: {
      POST_RESET_MAIL: "admin/password/reset/mail",
    },
    GENERAL: {
      IMAGE_UPLOAD: "admin/upload",
      EVENT_BANNER_UPLOAD: "admin/upload/",
      EVENT_SPEAKER_UPLOAD: "admin/upload/speaker",
      QR_BANNER_UPLOAD: "admin/upload/payment/qr",
      PAYMENT_PROOF_UPLOAD: "admin/upload/payment/proof",
    },
    OFFERS: {
      GET_OFFERS: "admin/offer/",
    },
    ORDERS: {
      GET_ORDERS: "admin/orders/",
    },
    INVOICES: {
      GET_INVOICES: "admin/invoices/",
    },
    DEVICES: {
      GET_DEVICES: "admin/devices",
    },
    VENDOR: {
      GET_REQUESTS: "admin/vendor",
      CONFIRM_REQUEST: "admin/vendor/confirm",
    },
  },
  FRONTEND: {
    FORGOT: {
      VERIFY_RESET: "app/verify/reset/token/",
      POST_RESET_MAIL: "app/verify/reset/token/",
    },
    BANNERS: {
      GET_BANNERS: "app/cms/home/banners",
      GET_BOTTOM_SECTIONS: "app/cms/home/bottom",
    },
    EVENTS: {
      GET_EVENTS: "app/event/",
      GET_PUBLISHED_EVENTS: "app/event/published",
      GET_LATESTEVENT: "app/event/latest",
      GET_EVENT: "app/event/published/",
    },
    PAYMENT: {
      INITIATE_PAYMENT: "app/payment/",
    },
    TICKET: {
      GET_TICKETS: "app/ticket/list",
    },
    VENDOR: {
      GENERATE_REQUEST: "app/vendor/",
    },
  },
};
