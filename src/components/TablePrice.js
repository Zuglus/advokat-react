import React from 'react';
import TablePriceHeader from './TablePriceHeader';
import TablePriceBody from './TablePriceBody';
import { Table, TableBody } from '@mui/material';

export default class TablePrice extends React.Component {
  render() {
    return (
      <Table>
        <TablePriceHeader />
        <TableBody>
          <TablePriceBody table={this.props.table} />
        </TableBody>
      </Table>
    )
  }
}
