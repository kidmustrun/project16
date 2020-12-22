import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
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
    "surname": new FormControl("", 
                Validators.required),
                "middlename": new FormControl(""),
    "type": new FormControl("", Validators.required),
    "phone": new FormControl("",[ Validators.required, Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)]),
    "birthday": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.pattern('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')]),
  });

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit()  {
    

  }
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
  onAddWorker() {
    this.addWorker.emit({
      name: this.myForm.controls["name"].value,
      surname: this.myForm.controls["surname"].value,
      middlename: this.myForm.controls["middlename"].value,
      type: this.myForm.controls["type"].value,
      phone: this.myForm.controls["phone"].value,
      birthday: this.myForm.controls["birthday"].value,
      email: this.myForm.controls["email"].value,
    });
    
  }
 
}

