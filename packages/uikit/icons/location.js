import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Location(props) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12 0C7.03125 0 3 4.03125 3 9C3 12.6094 4.26562 13.6406 11.0625 23.5312C11.2969 23.8594 11.6719 24 12 24C12.3281 24 12.7031 23.8594 12.9375 23.5312C19.7344 13.6406 21 12.6094 21 9C21 4.03125 16.9688 0 12 0ZM12 22.2188C5.4375 12.7031 4.5 12 4.5 9C4.5 4.875 7.875 1.5 12 1.5C16.125 1.5 19.5 4.875 19.5 9C19.5 12 18.6094 12.7031 12 22.2188ZM12 5.25C9.9375 5.25 8.25 6.9375 8.25 9C8.25 11.0625 9.9375 12.75 12 12.75C14.0625 12.75 15.75 11.0625 15.75 9C15.75 6.9375 14.0625 5.25 12 5.25ZM12 11.25C10.7812 11.25 9.75 10.2188 9.75 9C9.75 7.78125 10.7812 6.75 12 6.75C13.2188 6.75 14.25 7.78125 14.25 9C14.25 10.2188 13.2188 11.25 12 11.25Z" />
    </SvgIcon>
  );
}

export default Location;