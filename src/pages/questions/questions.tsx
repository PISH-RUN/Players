import React from 'react';
import { Box, Button, Divider, Grid, InputAdornment, Typography } from '@mui/material';
import { TextField } from '@exam/uikit';
import Question, { QuestionType } from 'components/question';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const QuestionsHeader = () => {
  return (
    <Box sx={{ background: '#fff', mx: -2, mt: -2, mb: 3, p: 2, borderBottom: '2px solid #e5e5e5' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h2">سوالات اکسل:</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            placeholder="جستجو"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs />
        <Grid item>
          <Button startIcon={<AddIcon />} color="primary" variant="contained">
            افزودن سوال گروهی
          </Button>
        </Grid>
        <Grid item>
          <Button startIcon={<AddIcon />} color="primary" variant="contained">
            افزودن سوال
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const Questions: React.ComponentType = () => {
  return (
    <Box>
      <QuestionsHeader />
      <Box sx={{ maxWidth: 1170 }}>
        <Question sx={{ mb: 4 }} />
        <Question sx={{ mb: 4 }} />
        <Box sx={{ border: '3px dashed #ccc', mb: 4, borderRadius: 4, overflow: 'hidden' }}>
          <Question type={QuestionType.similar} isMain />
          <Divider />
          <Question type={QuestionType.similar} sx={{ background: '#f8fafd' }} />
        </Box>

        <Box sx={{ border: '3px dashed #ccc', borderRadius: 4, overflow: 'hidden' }}>
          <Question type={QuestionType.group} isMain />
          <Divider />
          <Question type={QuestionType.group} sx={{ background: '#f8fafd' }} />
          <Divider />
          <Question type={QuestionType.group} sx={{ background: '#f8fafd' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
