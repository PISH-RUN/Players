import React from 'react';
import {
  Button,
  FormControl,
  useFormControl,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Box,
  OutlinedInput,
  Typography,
  Stack,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/AdminPanelSettings';
import EyeIcon from '@mui/icons-material/Visibility';

const styles = {
  txtAddComment: {
    background: '#fff',
    borderRadius: 0,
    '& fieldset': {
      border: 'none',
    },
    '& textarea': {
      transition: '100ms ease-in-out',
    },
    '&.Mui-focused textarea': {
      minHeight: 60,
    },
    borderTop: '1px solid #ddd',
  },
  btnAddComment: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
};

export type ConversationProps = {
  useType: 'superAdmin' | 'admin' | 'author' | 'observer';
  name: string;
  text: string;
};

export type ConversationsProps = {
  conversations?: Array<ConversationProps>;
  enAdd?: boolean;
};

const Conversations = ({ enAdd = false }: ConversationsProps): JSX.Element => {
  const ConversationMainText = ({ name }: { name: string }) => (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="body1">{name}</Typography>
      <Typography variant="caption">- 2 بهمن 1400</Typography>
    </Stack>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <List sx={{ width: '100%' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <ShieldIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ConversationMainText name="مانکی دی لوفی" />}
            secondary="لطفا این سوالا رو درست کن دوباره پیام بده تا بررسی کنم"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="شینزو آبه"
            secondary="با تشکر از توجه شما. موارد خواسته انجام شد، لطفا مجددا بررسی نمایید"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <ShieldIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="مانکی دی لوفی" secondary="لطفا این سوالا رو درست کن دوباره پیام بده تا بررسی کنم" />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <EyeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="شینزو آبه"
            secondary="با تشکر از توجه شما. موارد خواسته انجام شد، لطفا مجددا بررسی نمایید"
          />
        </ListItem>
      </List>
      {enAdd && <AddComment />}
    </Box>
  );
};

const AddCommentButton = () => {
  const { focused, filled } = useFormControl() || {};
  console.log(focused, filled);
  return focused || filled ? (
    <Button color="primary" size="small" sx={styles.btnAddComment}>
      ثبت نظر
    </Button>
  ) : (
    <></>
  );
};

const AddComment = () => {
  return (
    <>
      <FormControl fullWidth>
        <OutlinedInput placeholder="افزودن نظر" multiline sx={styles.txtAddComment} />
        <AddCommentButton />
      </FormControl>
    </>
  );
};

export default Conversations;
