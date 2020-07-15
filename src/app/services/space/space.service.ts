import { Injectable } from '@angular/core';
import { Space } from '../../models/space'

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() { }

  public getSpaces(): Array<Space> {
    return JSON.parse(localStorage.getItem('spaces'));
  }

  public getTotalSpaceCount(): number {
    return JSON.parse(localStorage.getItem('totalSpaceCount'));
  }

}
