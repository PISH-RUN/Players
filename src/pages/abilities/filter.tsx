import React, { useState } from 'react';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { TextField, Box, MenuItem, Button, FormControl, Grid, Typography, Collapse, Checkbox } from '@mui/material';
import { TextInput, SelectInput } from '@exam/uikit/form';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const data = [
  { value: 'test1', label: 'تست۱' },
  { value: 'test2', label: 'تست۲' },
  { value: 'test3', label: 'تست۳' },
];

type FormData = {
  bookletName: string;
  jobCategory: string;
  job: string;
  ability: string;
  admin: string;
  superAdmin: string;
  supervisor: string;
};

const style = {
  root: {
    '& .MuiTextField-root': { m: 1 },
  },
  icon: {
    color: '#BDBDBD',
  },
  activeIcon: {
    color: '#46D7A7',
  },
  mainCheckbox: {
    mx: 1,
  },
};

const Filter: React.ComponentType = () => {
  const [open, setOpen] = useState(false);
  const { handleSubmit, ...formMethods } = useForm<FormData>();

  const onSubmit = (data: Array<string>) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods} handleSubmit={handleSubmit}>
      <Box component="form" sx={style.root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Grid container alignItems="center" spacing={1}>
          <Grid item sm={4}>
            <TextInput name="bookletName" label="نام دفترچه" required disableLabel />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" sx={style.mainCheckbox}>
              <Grid item>
                <Typography variant="h5">وضعیت تایید:</Typography>
              </Grid>
              <Grid item>
                <Controller
                  name="admin"
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      icon={<PersonOutlineOutlinedIcon sx={style.icon} />}
                      checkedIcon={<PersonIcon sx={style.activeIcon} />}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="superAdmin"
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      icon={<AdminPanelSettingsOutlinedIcon sx={style.icon} />}
                      checkedIcon={<AdminPanelSettingsIcon sx={style.activeIcon} />}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="supervisor"
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      icon={<RemoveRedEyeOutlinedIcon sx={style.icon} />}
                      checkedIcon={<VisibilityIcon sx={style.activeIcon} />}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <SelectInput name="jobCategory" label="دسته شغلی" disableLabel options={data} required />
          </Grid>
          <Grid item xs>
            <SelectInput name="job" label="شغل" disableLabel options={data} />
          </Grid>
          <Grid item xs>
            <SelectInput name="ability" label="شایستگی" disableLabel options={data} />
          </Grid>
        </Grid>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid container spacing={1}>
            <Grid item xs>
              <SelectInput name="jobCategory" label="دسته شغلی" disableLabel options={data} />
            </Grid>
            <Grid item xs>
              <SelectInput name="job" label="شغل" disableLabel options={data} />
            </Grid>
            <Grid item xs>
              <SelectInput name="ability" label="شایستگی" disableLabel options={data} />
            </Grid>
          </Grid>
        </Collapse>
        <Box sx={{ mx: 1 }}>
          <FormControl margin="normal">
            <Button variant="contained" type="submit">
              جستجو
            </Button>
          </FormControl>
          <FormControl margin="normal">
            <Button onClick={() => setOpen(!open)} endIcon={open ? <ExpandLess /> : <ExpandMore />}>
              جستجوی پیشرفته
            </Button>
          </FormControl>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Filter;
