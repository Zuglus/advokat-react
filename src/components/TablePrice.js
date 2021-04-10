import React from 'react';
import TablePriceHeader from './TablePriceHeader';
import TablePriceBody from './TablePriceBody';
import { Table, TableBody } from '@material-ui/core';

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
