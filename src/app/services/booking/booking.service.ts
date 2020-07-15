import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  public getAllBookings(): Array<Booking> {
    var bookins = JSON.parse(localStorage['bookings']);
    return bookins;
  }
}

export class Booking {
  id: number;
  vehicleNo: number;
  spaceId: number;
  isOccupied: boolean;
  startTime: Date;
  endTime: Date;
  price: number
}
