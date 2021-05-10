import { ApiUrl } from '../../constants/ApiUrl';

export const getEmployeeRecords = async (): Promise<any> => {
  return await fetch(`${ApiUrl.getAllEmployees}?table=employees`, {
    method: 'GET',
    headers: {
      'x-api-key': 'Vl7xB9OrCtCGIPRnhPno96Phe9CvNl19Eh1KqY23',
    }
  })
  .then(response => response.json())
  .catch(error => {
    console.error(error);
  })
};

