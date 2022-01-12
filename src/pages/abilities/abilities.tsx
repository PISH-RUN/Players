import React from 'react';
import { Typography, Grid, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Filter from './filter';
import Table from 'components/table';

const data = [
  {
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
    status: 'شسی',
  },
];
const headers = ['نام دفترچه‌ها', 'دسته شغلی | شغل', 'شایستگی', 'تعداد سوالات', 'وضعیت تایید'];

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
