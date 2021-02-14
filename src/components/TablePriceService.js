import DataForTablePrice from '../data/DataForTablePrice'

const TablePriceService = (toFind) => DataForTablePrice.find(item => item.name === toFind);

export default TablePriceService;