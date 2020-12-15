import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myWorkerType = MyWorkerType;
  @Input() name: string;
  @Input() surname: string;
  @Input() type: number;
  @Input() id: number;

  @Output() editWorker = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  onEditWorker() {
    if (!this.name || !this.surname || !this.type || this.name.match(/([0-9])/g) || this.surname.match(/([0-9])/g))
     alert('Запись не может быть пустой и содержать цифр') 
    else
    this.editWorker.emit({
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type,
    });
    
  }
 
}

