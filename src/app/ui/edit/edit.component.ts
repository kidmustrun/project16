import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  editForm : FormGroup = new FormGroup({
             
    "name": new FormControl("",Validators.required),
    "surname": new FormControl("", [
                Validators.required, 
                
    ]),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required)
    
});
  myWorkerType = MyWorkerType;
  @Input() name: string;
  @Input() surname: string;
  @Input() type: number;
  @Input() id: number;
  @Input() phone: string;
  @Output() editWorker = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  onEditWorker() {

    this.editWorker.emit({
      id: this.id,
      name: this.editForm.controls["name"].value ,
      surname: this.editForm.controls["surname"].value,
      type: this.editForm.controls["type"].value,
      phone: this.editForm.controls["phone"].value
    });
    
  }
 
}

