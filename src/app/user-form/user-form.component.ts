import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() step = 0;
  @Input() formData!: FormGroup;
  @Output() changeStep = new EventEmitter<void>();
  @Output() clearFormData = new EventEmitter<void>();

  handleNextStep() {
    this.changeStep.emit();
  }

  handleClearForm() {
    this.clearFormData.emit();
  }

}
