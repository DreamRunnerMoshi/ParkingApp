import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  public getAllVehicle(): Array<Vehicle> {
    return JSON.parse(localStorage.getItem('vehicles'));
  }

  
}

export class Vehicle {
  id: number;
  name: string;
  image: string;
}
