/// <reference path='crud.d.ts'/>
import {RowID, RowElement} from './interface';
import * as all from './crud';
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}
const newRowID: RowID = all.insertRow(row);
const updatedRow: RowElement = {...row, age: 23};
all.updateRow(newRowID, updatedRow);
all.deleteRow(newRowID);
