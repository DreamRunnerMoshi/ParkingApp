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

  public getTotalVehicleServed(): number {
    return this.getAllBookings().length;
  }

  public getTotalEarnings(): number {
    var totalEarning = 0;
    this.getAllBookings().forEach(_ => {
      if (!_.isOccupied) totalEarning += _.price;
    });
    return totalEarning;
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
