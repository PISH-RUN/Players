import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

type MenuOption = {
  title: string;
  icon?: JSX.Element;
  path?: string;
  onClick?: () => void;
  subItems?: null | MenuOption[];
};

const style = {
  selectedItem: {
    backgroundColor: '#E3F2FD',
    borderRadius: 1,
    '&& svg': {
      color: '#2196F3',
    },
  },
  icon: {
    minWidth: '35px',
    '& svg': {
      color: '#757575',
    },
  },
};

const ListItem = ({ icon, title, onClick, path, subItems }: MenuOption) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();
  const selected = location.pathname === path;

  const handleClick = () => {
    if (!!subItems) {
      setOpen(!open);
    } else if (!!onClick) {
      onClick();
    } else if (!!path) {
      navigate(path);
    }
  };

  return (
    <>
      <ListItemButton sx={selected ? style.selectedItem : {}} onClick={handleClick}>
        <ListItemIcon sx={style.icon}>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {!!subItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {!!subItems && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subItems.map((link, i) => (
            <Link to={link.path || ''} key={i}>
              <List component="a" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </List>
            </Link>
          ))}
        </Collapse>
      )}
    </>
  );
};
export default ListItem;
