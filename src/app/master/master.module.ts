import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './UI/card/card.component';
import { ToolbarComponent } from './navigation_1/toolbar/toolbar.component';
import { SidebarComponent } from './navigation_1/sidebar/sidebar.component';
import { SidebarNavigationComponent } from './navigation_1/sidebar-navigation/sidebar-navigation.component';



@NgModule({
  declarations: [HeaderComponent, CardComponent, ToolbarComponent, SidebarComponent, SidebarNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
  ]
})
export class MasterModule { }
