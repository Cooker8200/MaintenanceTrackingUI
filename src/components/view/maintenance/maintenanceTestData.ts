import { IMaintenanceRecord } from "../../../interfaces/IMaintenanceRecord";

export const maintenanceData: IMaintenanceRecord[] = [
  {
    repairType: 'Filters change',
    repairDate: '1/1/2021',
    cost: '500',
    paid: true,
    vendor: 'Rhymes HVAC',
    equipment: 'HVAC Unit 1',
  },
  {
    repairType: 'Grill Certification',
    repairDate: '2/1/2021',
    cost: '250',
    paid: false,
    vendor: 'Midwest Equipment',
    equipment: 'Grill 1'
  },
  {
    repairType: 'Steam cleaning',
    repairDate: '12/26/2020',
    cost: '500',
    paid: true,
    vendor: 'Midwest Equipment',
    equipment: 'Shake machine',
  },
  {
    repairType: 'Motor replacement',
    repairDate: '11/1/2020',
    cost: '750',
    paid: true,
    vendor: 'Midwest Equipment',
    equipment: 'Shake machine',
  }
];
