import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
 public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  myForm : FormGroup = new FormGroup({
             
    "name": new FormControl("",Validators.required),
    "surname": new FormControl("", [
                Validators.required, 
                
    ]),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required)
    
});
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {
    this.addWorker.emit({
      name: this.myForm.controls["name"].value,
      surname: this.myForm.controls["surname"].value,
      type: this.myForm.controls["type"].value,
      phone: this.myForm.controls["phone"].value
    });
    
  }
 
}

