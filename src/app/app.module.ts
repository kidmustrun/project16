import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './ui/edit/edit.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule }   from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { AboutComponent } from './ui/about/about.component';
import { MainComponent } from './main/main.component';
import { FilterByIDPipe } from './pipes/filter-by-id.pipe';
import { FilterByBirthdayPipe } from './pipes/filter-by-birthday.pipe';
const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent}
];
@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditComponent, FilterPipe, AboutComponent, MainComponent,  FilterByIDPipe, FilterByBirthdayPipe],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
