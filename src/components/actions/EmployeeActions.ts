import { ApiUrl } from "../../constants/ApiUrl";

export const getAllEmployeeRecords = async (): Promise<any> => {
  await fetch(ApiUrl.getAllEmployees, {
    method: 'GET',
    headers: {
      'x-api-key': 'Vl7xB9OrCtCGIPRnhPno96Phe9CvNl19Eh1KqY23',
    }
  })
    .then(resp => {
      resp.json().then(x => x);
    })
    .catch(error => {
      console.error(error);
    })
};