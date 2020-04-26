import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'registration', component: PageRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
