import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { FormBuilder, Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor(private fb: FormBuilder, private modal: NzModalRef) {
    this.validateForm = this.fb.group({
      userName: [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      email   : [ '', [ Validators.email ] ],
      password: [ '', [ Validators.required ] ],
      confirm : [ '', [ this.confirmValidator ] ],
      comment : [ '', [ Validators.required ] ]
    });
  }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }

  ngOnInit() {
  }

  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log(value);
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value === 'JasonWood') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  confirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

}
