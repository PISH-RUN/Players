import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import Table from 'components/table';

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
const data = {
  tableData_DeliveryDate: [
    { name: 'زمان باقیمانده برای وارد کردن سوالات', count: '۱۰ روز' },
    { name: 'زمان باقیمانده برای اصلاح سوالات', count: '۱۲ روز' },
    { name: 'حداکثر موعد وارد کردن سوالات', count: '۱۴۰۱/۰۲/۱۲' },
    { name: 'حداکثر موعد نهایی کردن سوالات', count: '۱۴۰۱/۰۲/۲۳' },
  ],
  tableData_booklets: [
    { name: 'تعداد کل دفترچه‌ها', count: '۲۵' },
    { name: 'تکمیل شده', count: '۱۰' },
    { name: 'تایید شده', count: '۱۴' },
    { name: 'وارد نشده', count: '۵' },
  ],
  tableData_comments: [{ name: 'کامنت‌های دیده نشده', count: '۲۵' }],
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
            <Table headers={[]} dataRows={data.tableData_DeliveryDate} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت دفترچه‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <Table headers={[]} dataRows={data.tableData_booklets} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper variant="outlined" sx={style.paperTop}>
            <Typography variant="h5">وضعیت کامنت‌ها</Typography>
          </Paper>
          <Paper variant="outlined" sx={style.paper}>
            <Table headers={[]} dataRows={data.tableData_comments} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
