// export const USER_PERMISSIONS = {
//   VIEW_DASHBOARD: "view_home",
//   VIEW_PROFILE: "view_profile",
//   // Add more permissions as needed

import axios from "axios";
import apiurl from "../config/api-config";
// };
async function getUserPermissions() {
  try {
    const response = await axios.get(
      apiurl.BASE_URL +
        apiurl.ADMIN.USERS.GET_USER_ROUTES +
        "/" +
        localStorage.getItem("userId")
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user permissions:", error.message);
    throw error;
  }
}
async function processUserPermissions() {
  try {
    const userArr = await getUserPermissions();
    const newArr = userArr.map((item) => item.join("_"));
    console.log(newArr);
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error("Error processing user permissions:", error.message);
  }
}
export const USER_PERMISSIONS = JSON.stringify(processUserPermissions());
