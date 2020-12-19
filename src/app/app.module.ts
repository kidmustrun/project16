import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './ui/edit/edit.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule }   from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, EditComponent, FilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
