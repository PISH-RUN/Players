import React from 'react';
import { Typography, Grid, Button, Divider, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Filter from './filter';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Paper } from '@exam/uikit';
import { useGetAbilitiesQuery } from 'api/abilities';

const style = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 2,
    p: 4,
  },
  icon: {
    color: '#BDBDBD',
  },
};

const data: GridRowsProp = [
  {
    id: 1,
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
    status: (
      <Grid container spacing={1}>
        <Grid item>
          <PersonIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <AdminPanelSettingsIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <VisibilityIcon sx={style.icon} />
        </Grid>
      </Grid>
    ),
  },
  {
    id: 2,
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
    status: (
      <Grid container spacing={1}>
        <Grid item>
          <PersonIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <AdminPanelSettingsIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <VisibilityIcon sx={style.icon} />
        </Grid>
      </Grid>
    ),
  },
  {
    id: 3,
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
    status: (
      <Grid container spacing={1}>
        <Grid item>
          <PersonIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <AdminPanelSettingsIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <VisibilityIcon sx={style.icon} />
        </Grid>
      </Grid>
    ),
  },
  {
    id: 4,
    booklets: 'مهندسی',
    jobCategory: 'مهندسی نرم‌افزار',
    abilities: 'تست',
    noQuestion: '۱۲ / ۲۰',
  },
];

const columns: GridColDef[] = [
  { field: 'booklets', headerName: 'نام دفترچه‌ها', flex: 1 },
  { field: 'jobCategory', headerName: 'دسته شغلی | شغل', flex: 1 },
  { field: 'abilities', headerName: 'شایستگی', flex: 1 },
  { field: 'noQuestion', headerName: 'تعداد سوالات', flex: 1 },
  {
    field: 'status',
    headerName: 'وضعیت تایید',
    flex: 2,
    align: 'right',
    renderCell: () => (
      <Grid container spacing={1}>
        <Grid item>
          <PersonIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <AdminPanelSettingsIcon sx={style.icon} />
        </Grid>
        <Grid item>
          <VisibilityIcon sx={style.icon} />
        </Grid>
      </Grid>
    ),
  },
];

const Abilities: React.ComponentType = () => {
  const navigate = useNavigate();
  const { data: abilities, isLoading } = useGetAbilitiesQuery({ take: 10, skip: 0 });

  return (
    <Paper variant="outlined" p={[1, 2]}>
      <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
        <Typography variant="h2">شایستگی ها</Typography>
        <Button
          sx={{ borderRadius: 23 }}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/panel/add-abilities')}
        >
          افزودن شایستگی
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
      {/*<Table headers={headers} dataRows={data} />*/}
    </Paper>
  );
};

export default Abilities;
