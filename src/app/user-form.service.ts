import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {
  constructor(private fb: FormBuilder) { }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  clearForm(formData: FormGroup): void {
    formData.setValue({
      name: '',
      email: '',
      phone: ''
    });
  }
}
