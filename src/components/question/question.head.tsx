import React from 'react';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import QuestionStatus from 'components/questionStatus';
import CommentIcon from '@mui/icons-material/Comment';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const styles = {
  head: {
    borderBottom: '1px solid #ddd',
    p: 1,
  },
  divider: {
    height: 22,
    alignSelf: 'center',
  },
};

export type QuestionHeadProps = {
  isMainSimilar?: boolean;
  isSimilar?: boolean;
  question: {
    number: number;
  };
};

const QuestionHead = ({ question, isSimilar = false, isMainSimilar = false }: QuestionHeadProps) => {
  return (
    <Box sx={styles.head}>
      <Grid container>
        <Grid item xs>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            divider={<Divider orientation="vertical" sx={styles.divider} variant="middle" flexItem />}
          >
            <Stack alignItems="center" direction="row">
              <Typography variant="body1">سوال {question.number}:</Typography>
              <QuestionStatus status={[false, false, false]} />
            </Stack>
            <Typography variant="body1">سال 1400</Typography>
            <Typography variant="body1">سخت</Typography>
            <Button startIcon={<CommentIcon />} color="error" size="small">
              3 پیام جدید
            </Button>
          </Stack>
        </Grid>
        <Stack component={Grid} item direction="row" spacing={1}>
          {(!isSimilar || isMainSimilar) && (
            <Button variant="outlined" startIcon={<AddIcon />} size="small">
              افزودن سوال مشابه
            </Button>
          )}
          <Button variant="outlined" startIcon={<EditIcon />} size="small">
            ویرایش سوال
          </Button>
          <Button variant="outlined" size="small" color="error">
            <DeleteIcon />
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
};

export default QuestionHead;
