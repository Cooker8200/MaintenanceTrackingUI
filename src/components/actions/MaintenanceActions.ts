import { ApiUrl } from "../../constants/ApiUrl";

export const getAllMaintenanceRecords = () => {
  fetch(ApiUrl.getAllMaintenanceRecords)
    .then(resp => {
      console.log(resp);
    })
    .catch(error => {
      console.error(error);
    })
};