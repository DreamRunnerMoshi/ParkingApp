import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';

  displayName = '';

  constructor() {
    console.log(moment.utc());
    this.setupData();
  }

  private setupData() {
    var users = [{ username: 'user1', password: 'pass1' }, { username: 'user1', password: 'pass1', role: 'admin' }];
    localStorage.setItem('user', JSON.stringify(users));

    var spaces = [];
    for (var i = 1; i <= 9; i++) {
      spaces.push({ id: i, zone: `zone${i}`, price: Math.floor(Math.random() * 100) });
    }

    localStorage.setItem('spaces', JSON.stringify(spaces));
    localStorage.setItem('totalSpaceCount', "" + spaces.length);
    var vehicles = [{
      id: 1,
      name: 'vehicle1',
      image: '1.jpg'
    },
    {
      id: 2,
      name: 'vehicle2',
      image: '2.jpg'
    },
    {
      id: 3,
      name: 'vehicle3',
      image: '3.jpg'
    }];
    localStorage.setItem('vehicles', JSON.stringify(vehicles));

    var twoHour = new Date();
    twoHour.setHours(twoHour.getHours() - 2);

    var bookings = [{ id: 1, vehicleNo: 1, spaceId: 1, isOccupied: true, startTime: Date() },
    { id: 2, vehicleNo: 2, spaceId: 2, isOccupied: true, startTime: Date() },
    { id: 3, vehicleNo: 3, spaceId: 3, isOccupied: false, startTime: moment().add(-5, 'hours').format('YYYY-MM-DD hh:mm:ss'), endTime: Date(), price: 60 }];
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }
}
