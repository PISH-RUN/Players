import React from 'react';
import { Typography, Grid, Button, Divider, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Filter from './users.filter';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const style = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 1,
    p: 4,
  },
  icon: {
    color: '#BDBDBD',
  },
};

const columns: GridColDef[] = [
  { field: 'userType', headerName: 'نوع کاربر', flex: 1 },
  { field: 'name', headerName: 'نام', flex: 1 },
  { field: 'createdAt', headerName: 'تاریخ ایجاد', flex: 1 },
  { field: 'designOwner', headerName: 'مسئول طراحی', flex: 1 },
  { field: 'lastEdit', headerName: 'آخرین تاریخ ویرایش', flex: 1 },
];
const data = [
  {
    id: 1,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
  {
    id: 2,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
  {
    id: 3,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
  {
    id: 1,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
  {
    id: 2,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
  {
    id: 3,
    userType: 'ادمین',
    name: 'مهندسی نرم‌افزار',
    createdAt: '1400/12/03',
    designOwner: 'cell',
    lastEdit: '1400/12/15',
  },
];

const Users: React.ComponentType = () => {
  const navigate = useNavigate();

  return (
    <Box sx={style.root}>
      <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
        <Typography variant="h2">مدیریت کاربران</Typography>
        <Button
          sx={{ borderRadius: 23 }}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/panel/user/add')}
        >
          افزودن کاربر
        </Button>
      </Grid>
      <Divider light sx={{ my: 2 }} />
      <Filter />
      <Divider light sx={{ my: 2 }} />

      <Box sx={{ '& .MuiDataGrid-row:nth-child(even)': { bgcolor: '#f9f9f9' } }}>
        <DataGrid
          disableSelectionOnClick
          autoHeight
          sx={{ border: 'none' }}
          density="standard"
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Users;
