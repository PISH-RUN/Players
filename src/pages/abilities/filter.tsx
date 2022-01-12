import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField, Box, MenuItem, Button, FormControl, Grid, Typography, Collapse } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
};

const style = {
  root: {
    '& .MuiTextField-root': { m: 1 },
  },
  icon: {
    color: '#BDBDBD',
  },
};

const Filter: React.ComponentType = () => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: Array<string>) => {
    console.log(data);
  };

  return (
    <Box component="form" sx={style.root} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Grid container alignItems="center" spacing={1}>
        <Grid item sm={4}>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="bookletName"
              render={({ field }) => <TextField {...field} label="نام دفترچه" />}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h5">وضعیت تایید:</Typography>
            </Grid>
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
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="jobCategory"
              render={({ field }) => (
                <TextField {...field} select label="دسته شغلی">
                  {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="job"
              render={({ field }) => (
                <TextField {...field} select label="شغل">
                  {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="ability"
              render={({ field }) => (
                <TextField {...field} select label="شایستگی">
                  {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl margin="normal">
        <Button variant="contained" type="submit">
          جستجو
        </Button>
      </FormControl>
      <FormControl margin="normal">
        <Button type="submit" onClick={() => setOpen(!open)} endIcon={open ? <ExpandLess /> : <ExpandMore />}>
          جستجوی پیشرفته
        </Button>
      </FormControl>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={1}>
          <Grid item xs>
            <FormControl fullWidth>
              <Controller
                control={control}
                name="jobCategory"
                render={({ field }) => (
                  <TextField {...field} select label="دسته شغلی">
                    {data.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <Controller
                control={control}
                name="job"
                render={({ field }) => (
                  <TextField {...field} select label="شغل">
                    {data.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <FormControl fullWidth>
              <Controller
                control={control}
                name="ability"
                render={({ field }) => (
                  <TextField {...field} select label="شایستگی">
                    {data.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

export default Filter;
