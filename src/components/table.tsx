import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export type Cell = {
  [key: string]: any;
};

export type Props = {
  headers: Cell;
  dataRows: Array<Cell>;
  hideHeader?: boolean;
  hidePagination?: boolean;
};

export default function CustomizedTables({ headers, dataRows, hideHeader = false, hidePagination = false }: Props) {
  const location = useLocation();
  const ROWS_PER_PAGE = 15;
  const USER_PATH = location.pathname;
  const { pageNumber = 1 } = useParams();

  const cellProps = (head: string) => {
    const header = headers[head];

    return header.cellProps ? header.cellProps : {};
  };

  return (
    <>
      <TableContainer>
        <Table>
          {!hideHeader && (
            <TableHead>
              <TableRow>
                {Object.keys(headers).map((header) => (
                  <StyledTableCell {...cellProps(header)} key={header}>
                    {headers[header]?.label || headers[header]}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {(ROWS_PER_PAGE > 0
              ? dataRows.slice(
                  (Number(pageNumber) - 1) * ROWS_PER_PAGE,
                  (Number(pageNumber) - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE
                )
              : dataRows
            ).map((row, index) => (
              <StyledTableRow key={index}>
                {Object.keys(headers).map((header) => (
                  <StyledTableCell {...cellProps(header)} key={header}>
                    {row[header]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!hidePagination && (
        <Box display="flex" justifyContent="flex-end" flex={1} p={1}>
          <Pagination
            page={Number(pageNumber)}
            count={Math.ceil(dataRows.length / ROWS_PER_PAGE)}
            shape="rounded"
            color="primary"
            boundaryCount={2}
            renderItem={(item) => <PaginationItem component={Link} to={`${USER_PATH}/${item.page}`} {...item} />}
          />
        </Box>
      )}
    </>
  );
}
