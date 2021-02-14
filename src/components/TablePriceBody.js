import { Box, TableCell, TableRow } from "@material-ui/core"

const TablePriceBody = ({ data }) => {
  return (

    data.map(item => {
      return (
        <TableRow key={item.id}>
          <TableCell>{item.text}</TableCell>
          <TableCell align="center">
            {item.price}
            <Box align="center">{item.price2}</Box>
          </TableCell>
        </TableRow>
      )
    }
    )
  )
}

export default TablePriceBody;