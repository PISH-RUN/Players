import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import Table, { Cell } from 'components/table';

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
const header: Cell = {
  name: 'متسمینبت',
  count: {
    label: 'تعداد',
    align: 'left',
  },
};
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

const Dashboard: React.ComponentType = () => {
  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">موعد تحویل</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <Table headers={header} dataRows={data.tableData_DeliveryDate} hideHeader hidePagination />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت دفترچه‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <Table headers={header} dataRows={data.tableData_booklets} hideHeader hidePagination />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت کامنت‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <Table headers={header} dataRows={data.tableData_comments} hideHeader hidePagination />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
