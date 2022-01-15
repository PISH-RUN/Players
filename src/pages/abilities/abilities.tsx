import React from 'react';
import { Typography, Grid, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Filter from './filter';
import Table, { Cell } from 'components/table';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VisibilityIcon from '@mui/icons-material/Visibility';

const headers: Cell = {
  booklets: 'نام دفترچه‌ها',
  jobCategory: 'دسته شغلی | شغل',
  abilities: 'شایستگی',
  noQuestion: 'تعداد سوالات',
  status: 'وضعیت تایید',
};
const data: Array<Cell> = [
  {
    id: 1,
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
    // status: { admin: <PersonIcon />, superAdmin: <AdminPanelSettingsIcon />, supervisor: <VisibilityIcon /> },
  },
];

const Abilities: React.ComponentType = () => {
  return (
    <>
      <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
        <Typography variant="h2">شایستگی ها</Typography>
        <Button sx={{ borderRadius: 23 }} variant="contained" color="primary" startIcon={<AddIcon />}>
          افزودن شایستگی
        </Button>
      </Grid>
      <Divider light sx={{ my: 2 }} />
      <Filter />
      <Divider light sx={{ my: 2 }} />
      <Table headers={headers} dataRows={data} />
    </>
  );
};

export default Abilities;
