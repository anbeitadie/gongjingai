import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileValidator, mobileAsyncValidator} from '../validator/validator';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;


  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordGroup: fb.group({
      password: ['', [Validators.minLength(6)]],
      pconfirm: [''],
                                  }, {validator: equalValidator})
    });
  }
  onSubmit() {
    // const isValid: boolean = this.formModel.get('username').valid;
    // console.log('jieguo' + isValid);
    // let errors: any = this.formModel.get('username').errors;
    // console.log('username的错误信息是：' + JSON.stringify(errors));
   if (this.formModel.valid) {
    console.log(this.formModel.value);
   }
  }
  ngOnInit() {
  }

}
