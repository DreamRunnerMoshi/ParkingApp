import { Component, OnInit } from '@angular/core';
import { GenericTableComponent } from '../shared/generic-table/generic-table.component'
import { SnackbarService } from '../services/utility/snackbar-service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpaceService } from '../services/space/space.service';
import { Space } from '../models/space';
import { VehicleService } from '../services/vehicle/vehicle.service';
import { BookingService } from '../services/booking/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GenericTableComponent]
})
export class HomeComponent implements OnInit {

  constructor(private spaceService: SpaceService, private vehicleService: VehicleService, private bookinService: BookingService) {
  }

  totalSpace: number;
  totalVehicleServed: number;
  totalEarning: number;

  ngOnInit(): void {
    this.totalSpace = this.spaceService.getTotalSpaceCount();
    this.totalVehicleServed = this.bookinService.getTotalVehicleServed();
    this.totalEarning = this.bookinService.getTotalEarnings();
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'change-password-dialog.html',
})
export class DialogContentExampleDialog {

  constructor(
    private diaglog: MatDialog,
    private _snackBar: SnackbarService,
    private dialogRef: MatDialogRef<DialogContentExampleDialog>) {
  }

  changePassword = function () {

  }
}

