import { Component, OnInit, Input } from '@angular/core';
import { Space } from 'src/app/models/space';
import { SpaceService } from 'src/app/services/space/space.service';
import { BookingService, Booking } from 'src/app/services/booking/booking.service';
import { VehicleService, Vehicle } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-space-display',
  templateUrl: './space-display.component.html',
  styleUrls: ['./space-display.component.css']
})
export class SpaceDisplayComponent implements OnInit {
  @Input() isEditable: boolean;
  constructor(private spaceService: SpaceService, private bookingServce: BookingService, private vehicleService: VehicleService) { }

  spaces: Space[];
  bookings: Booking[];
  bookingMap = new Map<number, Booking>();
  vehicleMap = new Map<number, Vehicle>();
  spaceMap = new Map<number, Space>();
  ngOnInit(): void {
    this.spaces = this.spaceService.getSpaces();
    this.spaces.forEach(_ => {
      this.spaceMap.set(_.id, _);
    })
    this.bookings = this.bookingServce.getAllBookings();
    this.vehicleService.getAllVehicle().forEach(_ => {
      this.vehicleMap.set(_.id, _);
    });
    this.bookings.forEach(_ => {
      if (_.isOccupied) {
        var space = this.spaceMap[_.spaceId];
        var vehicle = this.vehicleMap.get(_.vehicleNo);

        this.bookingMap[_.spaceId] = {
          vehicleName: vehicle.name,
          image: vehicle.image,
          bookingTime: _.startTime
        };
      }
    });
  }

}
