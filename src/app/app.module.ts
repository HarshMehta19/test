import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterModule } from './master/master.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './home/services/services.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileAppDevelopmentComponent } from './pages/mobile-app-development/mobile-app-development.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ArtificialIntelligenceComponent } from './pages/artificial-intelligence/artificial-intelligence.component';
import { MachineLearningComponent } from './pages/machine-learning/machine-learning.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
// import { SidebarComponent } from './master/navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    WebDevelopmentComponent,
    MobileAppDevelopmentComponent,
    FooterComponent,
    ArtificialIntelligenceComponent,
    MachineLearningComponent,
    StaffingComponent,
    WebDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule
  ],
  providers: [MasterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
