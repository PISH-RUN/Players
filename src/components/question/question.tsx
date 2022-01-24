import React from 'react';
import { Paper } from '@exam/uikit';
import { Typography, Box, Grid, Stack, Button, Divider, IconButton } from '@mui/material';
import QuestionStatus from 'components/questionStatus';
import CommentIcon from '@mui/icons-material/Comment';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';

const styles = {
  head: {
    borderBottom: '1px solid #ddd',
    p: 1,
  },
};

const Question = () => {
  return (
    <Paper p={0} elevation={1}>
      <Box sx={styles.head}>
        <Grid container>
          <Grid item xs>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              divider={
                <Divider orientation="vertical" sx={{ height: 22, alignSelf: 'center' }} variant="middle" flexItem />
              }
            >
              <Stack alignItems="center" direction="row">
                <Typography variant="body1">سوال1:</Typography>
                <QuestionStatus status={[false, false, false]} />
              </Stack>
              <Typography variant="body1">سال 1400</Typography>
              <Typography variant="body1">سخت</Typography>
              <Button startIcon={<CommentIcon />} color="error" size="small">
                3 پیام سخت
              </Button>
            </Stack>
          </Grid>
          <Stack component={Grid} item direction="row" spacing={1}>
            <Button variant="outlined" startIcon={<AddIcon />} size="small">
              افزودن سوال مشابه
            </Button>
            <Button variant="outlined" startIcon={<EditIcon />} size="small">
              ویرایش سوال
            </Button>
            <Button variant="outlined" size="small" color="error">
              <DeleteIcon />
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Question;
