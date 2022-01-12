import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

type Props = {
  headers: Array<string>;
  dataRows: Array<any>;
};

export default function CustomizedTables({ headers, dataRows }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              <StyledTableCell>{header}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((row) => (
            <StyledTableRow key={row.id}>
              {headers.map((header) => {
                <StyledTableCell align="right" key={header}>
                  {row[header]}
                </StyledTableCell>;
              })}
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.count}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
