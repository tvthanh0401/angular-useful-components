import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.css']
})
export class MobileTableComponent {
  @Input() headers: string[] = [];
  @Input() records: any[] = [];
  constructor() {

  }
  ngOnInit() {
    
  }
}
