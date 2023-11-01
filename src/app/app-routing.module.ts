import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { MobileAppDevelopmentComponent } from './pages/mobile-app-development/mobile-app-development.component';
import { WebDesignComponent } from './pages/web-design/web-design.component';
import { StaffingComponent } from './pages/staffing/staffing.component';
import { MachineLearningComponent } from './pages/machine-learning/machine-learning.component';
import { ArtificialIntelligenceComponent } from './pages/artificial-intelligence/artificial-intelligence.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-development', component: WebDevelopmentComponent },
  { path: 'mobile-app-development', component: MobileAppDevelopmentComponent },
  { path: 'artificial-intelligence', component: ArtificialIntelligenceComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'staffing', component: StaffingComponent },
  { path: 'web-design', component: WebDesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
