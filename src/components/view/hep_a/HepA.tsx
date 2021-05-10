import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IHepARecord } from '../../../interfaces/IHepARecord';
import { getEmployeeRecords } from '../../actions/EmployeeActions';
import MainAppBar from '../appbar/MainAppBar';
import Title from '../utils/Title';

const HepA: React.FC = () => {
  const [hepARecords, setHepARecords] = useState<IHepARecord[]>([]);

  useEffect(() => {
    getEmployeeRecords().then(data => setHepARecords(convertToHepARecord(data)));
  }, []);

  const getDateDifference = (dateOne: string, dateTwo: string) => {
    return 30;
  };

  const isInCompliance = (firstShot: string, secondShot: string) => {
    if (firstShot === undefined || secondShot === undefined) return false;
    if (getDateDifference(firstShot, secondShot) < 6) return true;
    else return false;
  };

  const convertToHepARecord = (data: any) => {
    return data.map((item: any) => ({
      firstName: item.firstName,
      lastName: item.lastName,
      fullName: item.firstName + ' ' + item.lastName,
      firstShot: item.firstHepA,
      secondShot: item.secondHepA,
      inCompliance: isInCompliance(item.firstHepA, item.secondHepA),
    }))
  };

  const renderTitle = () => (
    <Title
      title={'Hep A Records'}
      subtitle={'View Hep A records below.'}
    />
  );

  const renderHepARecords = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>First Short</TableCell>
            <TableCell>Second Shot</TableCell>
            <TableCell>In Compliance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hepARecords.map((record: IHepARecord) => (
            <TableRow>
              <TableCell>{record.firstName + ' ' + record.lastName}</TableCell>
              <TableCell>{record.firstShot}</TableCell>
              <TableCell>{record.secondShot}</TableCell>
              <TableCell>{record.inCompliance ? 'Compliant' : 'Not Compliant'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  console.log(hepARecords);
  if (hepARecords.length === 0) {
    return <></>;
  } else {
    return (
      <div>
        <MainAppBar />
        <br />
        {renderTitle()}
        {renderHepARecords()}
      </div>
    );
  }
};

export default HepA;
