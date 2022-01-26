import React, { useState } from 'react';
import { Box, Stack, Typography, Collapse, Button } from '@mui/material';
import Conversations from '../conversations';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type QuestionMoreInfoProps = {
  isSimilar?: boolean;
};

const QuestionMoreInfo = ({ isSimilar = false }: QuestionMoreInfoProps) => {
  const [showMore, setShowMore] = useState(!isSimilar);

  return (
    <>
      <Collapse in={!showMore}>
        <Stack>
          <Button startIcon={<ExpandMoreIcon />} onClick={() => setShowMore(true)}>
            مشاهده بیشتر
          </Button>
        </Stack>
      </Collapse>
      <Collapse in={showMore}>
        <Box sx={{ pl: 8, py: 2 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5">متن پاسخ:</Typography>
            <Typography variant="body1">
              گزارش هزینه‌های پیش بینی و واقعی پروژه می تواند قسمتی از گزارش‌های تحلیلی کنترل پروژه باشد.
            </Typography>
          </Stack>
          <Box sx={{ my: 3, mr: 6, borderRadius: 2, border: '1px solid #eaeaea', bgcolor: '#f6f8fa' }}>
            <Conversations />
          </Box>
        </Box>
      </Collapse>
    </>
  );
};

export default QuestionMoreInfo;
