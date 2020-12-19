import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatebaseService } from 'src/app/shared/datebase.service';

import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatebaseService]
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  @Input() searchStr: string;
  constructor(private DatebaseService: DatebaseService){}
  ngOnInit(){
         this.DatebaseService.getData().subscribe((data:MyWorker[]) => this.workers=data);
         
}

  getByType(type: number) {
    if (this.workers)
    return this.workers.filter((worker) => worker.type === type);

  }

  onDeleteById(id: number|string) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    let idForRequest:string = String(this.workers[index].id);

    if (index !== -1) {
      this.workers.splice(index, 1);
      this.DatebaseService.deleteData(idForRequest).subscribe((data) => idForRequest=data);
      
    }
    
  }

  onAddWorker(worker) {
    
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
   
    this.workers.push(worker);
    this.DatebaseService.postData(worker).subscribe((data) => worker=data);
     
  
    
  
    
  }
  onEditWorker(worker_edit){
    let index = this.workers.findIndex((worker) => worker.id === worker_edit.id);
    if (index !== -1) {
      this.workers.splice(index, 1, worker_edit);
      this.DatebaseService.putData(worker_edit).subscribe((data) => worker_edit=data);
    }
  }
 
}


