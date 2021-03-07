import { IServeSafeRecord } from "../../../interfaces/IServeSafeRecord";

export const serveSafeData: IServeSafeRecord[] = [
  {
    firstName: 'Robbie',
    lastName: 'Holcomb',
    certificationNumber: '1234',
    proctor: 'Jack Proctor',
    expirationDate: '1/2/2022',
    inCompliance: true,
  },
  {
    firstName: 'Martin',
    lastName: 'Edwards',
    certificationNumber: '5678',
    proctor: 'Jack Proctor',
    expirationDate: '1/ 2/2022',
    inCompliance: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    certificationNumber: '9999',
    proctor: 'Jack Proctor',
    expirationDate: '1/2/2020',
    inCompliance: false,
  },
];
