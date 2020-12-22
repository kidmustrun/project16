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
    "middlename": new FormControl(""),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("", Validators.required),
    "birthday": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]),
    
});
getToday(){
  let today: string|Date = new Date();
  let dd: string|number = today.getDate();
  let mm: string|number = today.getMonth()+1;
  let yyyy: string|number = today.getFullYear();


if(dd<10){

      dd='0'+dd
  } 
  if(mm<10){
      mm='0'+mm
  } 

return today = yyyy+'-'+mm+'-'+dd;
}
  myWorkerType = MyWorkerType;
  @Input() name: string;
  @Input() surname: string;
  @Input() middlename: string;
  @Input() type: number;
  @Input() id: number;
  @Input() phone: string;
  @Input() email: string;
  @Input() birthday: string;
  @Output() editWorker = new EventEmitter<object>();
  @Output() firstDeleteWorker = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onEditWorker() {

    this.editWorker.emit({
      id: this.id,
      name: this.editForm.controls["name"].value ,
      surname: this.editForm.controls["surname"].value,
      middlename: this.editForm.controls["middlename"].value,
      type: this.editForm.controls["type"].value,
      phone: this.editForm.controls["phone"].value,
      email:  this.editForm.controls["email"].value,
      birthday:  this.editForm.controls["birthday"].value,
    });
    
  }
  onDeleteWorker(id: number) {
    this.firstDeleteWorker.emit(this.id);
  }
 
}

