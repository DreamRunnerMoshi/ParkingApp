import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle/vehicle.service';
import { tableColumn } from '../shared/generic-table/generic-table.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }
  vehicles: any[];
  displayColumns = [new tableColumn('id', 'Id'), new tableColumn('name', 'Name'), new tableColumn('image', 'Image')];
  ngOnInit(): void {
    this.vehicles = this.vehicleService.getAllVehicle();
  }
}
