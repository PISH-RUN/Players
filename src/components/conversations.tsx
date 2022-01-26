import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/AdminPanelSettings';
import EyeIcon from '@mui/icons-material/Visibility';

export type ConversationProps = {
  useType: 'superAdmin' | 'admin' | 'author' | 'observer';
  name: string;
  text: string;
};

export type ConversationsProps = { conversations?: Array<ConversationProps> };

const Conversations = (props: ConversationsProps): JSX.Element => {
  return (
    <List sx={{ width: '100%' }}>
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
  );
};

export default Conversations;
