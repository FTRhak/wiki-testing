import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { PageRegistrationComponent } from './components/page-registration/page-registration.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ListDataComponent } from './components/list-data/list-data.component';
import { DolarSignPipe } from './pipes/dolar-sign.pipe';
import { QuickFilterPipe } from './pipes/quick-filter.pipe';
import { ExportFileDirective } from './directives/export-file.directive';
import { AuthService } from './services/auth.service';
import { DataManagerService } from './services/data-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    PageRegistrationComponent,
    PageHomeComponent,
    ListDataComponent,
    DolarSignPipe,
    QuickFilterPipe,
    ExportFileDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
