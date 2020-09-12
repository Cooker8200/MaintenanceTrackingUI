import * as React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const RecordsDropDown: React.FC<IRecordsDropDownProps> = ({ history }) => {
  const options = [
    {
      key: 'maintenance',
      value: 'Maintenance Records'
    },
    {
      key: 'hepa',
      value: 'Hep A Records'
    },
    {
      key: 'servsafe',
      value: 'ServSafe Records'
    },
  ];

  const handleChange = (event: React.ChangeEvent<any>) => {
    const path = event.target.value === 'hepa' ? 'hep-a' : event.target.value;
    history.push(path);
  };

  return (
    <Select
      onChange={handleChange}
      style={{ width: '350px' }}
      placeholder='What do you want to manage today?'
    >
      {options.map(item => (
        <MenuItem
          key={item.key}
          value={item.key}
        >
          {item.value}
        </MenuItem>
      ))}
    </Select>
  );
};

interface IRecordsDropDownProps {
  history: any;
};

export default withRouter(RecordsDropDown);