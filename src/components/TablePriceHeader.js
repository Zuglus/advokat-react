import { TableCell, TableHead, TableRow } from "@material-ui/core";

const TablePriceHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">вид юридической помощи</TableCell>
        <TableCell align="center">размер вознаграждения (руб.)</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TablePriceHeader;