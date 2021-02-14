import TablePriceHeader from './TablePriceHeader';
import TablePriceService from './TablePriceService';
import TablePriceBody from './TablePriceBody';
import { Table, TableBody } from '@material-ui/core';

const TablePrice = ({ tabName }) => {
  const dataForTable = TablePriceService(tabName);
  console.log(dataForTable);
  return (
    <Table>
      <TablePriceHeader />
      <TableBody>
        <TablePriceBody data={dataForTable.priceList} />
      </TableBody>
    </Table>
  )
}

export default TablePrice;