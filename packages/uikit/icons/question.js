import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Question(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M13.4062 6H10.5938C8.90625 6 7.5 7.40625 7.5 9.09375V9.5625C7.5 9.98438 7.82812 10.3125 8.25 10.3125C8.67188 10.3125 9 9.98438 9 9.5625V9.09375C9 8.20312 9.70312 7.5 10.5938 7.5H13.4062C14.2969 7.5 15 8.20312 15 9.09375C15 9.70312 14.6719 10.2188 14.2031 10.5L11.3438 11.9062C10.8281 12.2344 10.5 12.7969 10.5 13.4062V14.25C10.5 14.6719 10.8281 15 11.25 15C11.6719 15 12 14.6719 12 14.25V13.4062C12 13.3125 12.0469 13.2656 12.0469 13.2656L14.9062 11.8125C15.8906 11.2969 16.5 10.2188 16.5 9.09375C16.5 7.40625 15.0938 6 13.4062 6ZM11.25 16.125C10.6406 16.125 10.125 16.6406 10.125 17.25C10.125 17.8594 10.6406 18.375 11.25 18.375C11.8594 18.375 12.375 17.8594 12.375 17.25C12.375 16.6406 11.8594 16.125 11.25 16.125ZM12 0.75C5.76562 0.75 0.75 5.76562 0.75 12C0.75 18.2344 5.76562 23.25 12 23.25C18.2344 23.25 23.25 18.2344 23.25 12C23.25 5.76562 18.2344 0.75 12 0.75ZM12 21.75C6.60938 21.75 2.25 17.3906 2.25 12C2.25 6.60938 6.60938 2.25 12 2.25C17.3906 2.25 21.75 6.60938 21.75 12C21.75 17.3906 17.3906 21.75 12 21.75Z" />
    </SvgIcon>
  );
}

export default Question;