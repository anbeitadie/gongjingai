import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from "rxjs/Observable";

export function mobileValidator(control: FormControl): any {
  var myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  let valid = myreg.test(control.value);
  console.log('mobile校验结果是' + valid)
  return valid ? null : {mobile : true};
}
export function mobileAsyncValidator(control: FormControl): any {
  var myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  let valid = myreg.test(control.value);
  console.log('mobile校验结果是' + valid)
  return Observable.of(valid ? null : {mobile : true}).delay(5000);
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid: boolean = false;
  if (password && pconfirm) {
    valid = (password.value === pconfirm.value);
  }
  return valid ? null : {equal : {descxxx: '密码和确认密码不匹配'}};
}
