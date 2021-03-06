import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Mobile(props) {
  return (
    <SvgIcon {...props}>
      <path d="M17.292 1.051H7.138a2.88 2.88 0 0 0-2.877 2.877v16.246a2.88 2.88 0 0 0 2.877 2.877h10.154a2.88 2.88 0 0 0 2.877-2.877V3.928a2.88 2.88 0 0 0-2.877-2.877zM7.138 2.743h10.154c.654 0 1.185.53 1.185 1.185v16.246c0 .654-.53 1.185-1.185 1.185H7.138c-.654 0-1.185-.53-1.185-1.185V3.928c0-.654.53-1.185 1.185-1.185zm5.087 14.554c.467 0 .846.379.846.846 0 .429-.318.782-.731.838l-.115.008a.85.85 0 0 1-.856-.846c0-.429.318-.782.731-.838z" />
    </SvgIcon>
  );
}

export default Mobile;
