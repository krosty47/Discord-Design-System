const routes = {
  LOGIN: "/",
  DASHBOARD: "/dashboard/:activeOrder?",
  DASHBOARD1: "/dashboard/",
  USERS: "/users",
  USER_EDIT: "/user/:id/:rol",
  USER_CREATE: "/user",
  CHANGE_PASSWORD: "/change-password/:hash",
  RECOVER_PASSWORD: "/recover-password",
};

export default routes;
