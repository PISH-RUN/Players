import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const cellProps = (head: string) => {
    const header = headers[head];

    return header.cellProps ? header.cellProps : {};
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
            {dataRows.map((row, index) => (
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="تعداد سطر در جدول"
        />
      )}
    </>
  );
}
