import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function User(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 0.75C5.76562 0.75 0.75 5.76562 0.75 12C0.75 18.2344 5.76562 23.25 12 23.25C18.2344 23.25 23.25 18.2344 23.25 12C23.25 5.76562 18.2344 0.75 12 0.75ZM12 21.75C9.60938 21.75 7.35938 20.8594 5.67188 19.4062C6.42188 17.7188 8.15625 16.5 10.125 16.5H13.875C15.8438 16.5 17.5781 17.7188 18.3281 19.4062C16.6406 20.8594 14.3906 21.75 12 21.75ZM19.4531 18.2812C18.3281 16.3125 16.2656 15 13.875 15H10.125C7.73438 15 5.67188 16.3125 4.54688 18.2812C3.14062 16.5938 2.25 14.3906 2.25 12C2.25 6.60938 6.60938 2.25 12 2.25C17.3906 2.25 21.75 6.60938 21.75 12C21.75 14.3906 20.8594 16.5938 19.4531 18.2812ZM12 6C9.9375 6 8.25 7.6875 8.25 9.75C8.25 11.8125 9.9375 13.5 12 13.5C14.0625 13.5 15.75 11.8125 15.75 9.75C15.75 7.6875 14.0625 6 12 6ZM12 12C10.7812 12 9.75 10.9688 9.75 9.75C9.75 8.53125 10.7812 7.5 12 7.5C13.2188 7.5 14.25 8.53125 14.25 9.75C14.25 10.9688 13.2188 12 12 12Z" />
    </SvgIcon>
  );
}

export default User;
