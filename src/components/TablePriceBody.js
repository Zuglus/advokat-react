import React from 'react';
import { Box, TableCell, TableRow } from "@material-ui/core"

export default class TablePriceBody extends React.Component {
  render() {
    return (
      this.props.table.map(item => {
        return (
          <TableRow key={item.id}>
            <TableCell>{item.text}</TableCell>
            <TableCell align="center">
              {item.price}
              <Box align="center">{item.price2}</Box>
            </TableCell>
          </TableRow>
        )
      })
    )
  }
}
