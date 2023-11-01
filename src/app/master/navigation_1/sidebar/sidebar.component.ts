import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean;
  showServices: boolean;

  constructor() {
    this.sidebarVisible = false;
    this.showServices = false;
  }

  ngOnInit(): void {
  }
  toogleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
