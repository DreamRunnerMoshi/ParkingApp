import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
    
    constructor() {
    }
    transform(cellValue) {
       return moment(cellValue).fromNow();
    }
}