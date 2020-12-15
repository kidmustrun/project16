import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {
    if (!this.name || !this.surname || this.name.match(/([0-9])/g) || this.surname.match(/([0-9])/g))
     alert('Запись не может быть пустой и содержать цифр') 
    else
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
    });
    
  }
 
}

