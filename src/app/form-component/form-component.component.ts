import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent implements OnInit {
  genders: string[] = ['Male', 'Female'];
  bankForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.formData();
  }

  formData() {
    this.bankForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('.{3,}'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('.{3,}'),
      ]),
      phoneNumber: new FormControl('', Validators.pattern('[0-9]{10,10}')),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$'),
      ]),
      accountNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      ifscCode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$'),
      ]),
      notes: new FormControl(''),
    });
  }

  get formControls() {
    return this.bankForm.controls;
  }
  postBankDetails(bankForm) {
    if (this.bankForm.invalid) {
      this.bankForm.markAllAsTouched();
      return;
    }
    console.log(bankForm.value);
  }
}
