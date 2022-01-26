import React from 'react';
import { Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/AdminPanelSettings';
import EyeIcon from '@mui/icons-material/Visibility';

export type QuestionStatusProps = {
  status: [Boolean, Boolean, Boolean];
};

const styles = {
  icon: {
    color: '#bdbdbd',
    fontSize: 22,
  },
};

const QuestionStatus = ({ status }: QuestionStatusProps): JSX.Element => {
  return (
    <Stack direction="row">
      <PersonIcon sx={styles.icon} />
      <ShieldIcon sx={styles.icon} />
      <EyeIcon sx={styles.icon} />
    </Stack>
  );
};

export default QuestionStatus;
