import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'cellFormat' })
export class CellFormatPipe implements PipeTransform {
    private datePipe: DatePipe;
    constructor() {
        this.datePipe = new DatePipe('en-US');
    }
    transform(cellValue, columnType: string) {

        return (columnType == 'date') ? this.datePipe.transform(cellValue, 'dd-MM-yyyy HH:MM:ss') : cellValue;
    }
}