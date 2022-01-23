import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid as MuiDataGrid, GridColDef, DataGridProps } from '@mui/x-data-grid';

const style = {
  paperTop: {
    width: '320px',
    p: 2,
    textAlign: 'center',
  },
  paper: {
    width: '320px',
    p: 2,
    mt: 2,
    minHeight: 400,
  },
};

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'نام',
    flex: 1,
  },
  {
    field: 'count',
    headerName: 'نام',
    flex: 0.5,
  },
];

const data = {
  tableData_DeliveryDate: [
    { id: 1, name: 'زمان باقیمانده برای وارد کردن سوالات', count: '۱۰ روز' },
    { id: 2, name: 'زمان باقیمانده برای اصلاح سوالات', count: '۱۲ روز' },
    { id: 3, name: 'حداکثر موعد وارد کردن سوالات', count: '۱۴۰۱/۰۲/۱۲' },
    { id: 4, name: 'حداکثر موعد نهایی کردن سوالات', count: '۱۴۰۱/۰۲/۲۳' },
  ],
  tableData_booklets: [
    { id: 1, name: 'تعداد کل دفترچه‌ها', count: '۲۵' },
    { id: 2, name: 'تکمیل شده', count: '۱۰' },
    { id: 3, name: 'تایید شده', count: '۱۴' },
    { id: 4, name: 'وارد نشده', count: '۵' },
  ],
  tableData_comments: [{ id: 1, name: 'کامنت‌های دیده نشده', count: '۲۵' }],
};

const DataGrid = styled((props: DataGridProps) => (
  <MuiDataGrid
    disableSelectionOnClick
    autoHeight
    components={{
      Footer: () => <></>,
    }}
    {...props}
  />
))<DataGridProps>(() => ({
  border: 'none',
  '& .MuiDataGrid-columnHeaders': { display: 'none' },
  '& .MuiDataGrid-virtualScroller': { marginTop: '0!important' },
  '& .MuiDataGrid-row:nth-child(even)': { backgroundColor: '#f9f9f9' },
}));

const Dashboard: React.ComponentType = () => {
  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">موعد تحویل</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <DataGrid rows={data.tableData_booklets} columns={columns} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت دفترچه‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <DataGrid rows={data.tableData_booklets} columns={columns} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت کامنت‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <DataGrid rows={data.tableData_comments} columns={columns} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
