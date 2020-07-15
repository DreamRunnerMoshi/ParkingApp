import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  @Input() dataSource: any[]
  @Input() displayedColumns: tableColumn[];
  constructor() { }
  refinedDisplayColumns: string[];
  ngOnInit(): void {
    this.refinedDisplayColumns = this.displayedColumns.map(x => x.name);
  }
}

export class tableColumn {
  name: string;
  displayName: string;
  type: any;

  constructor(name: string, displayName: string, type: string = 'string') {
    this.displayName = displayName;
    this.name = name;
    this.type = type;
  }
}
