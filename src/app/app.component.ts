import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserFormService } from './user-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 0;
  formData = this.userFormService.initForm();

  constructor(
    public userFormService: UserFormService,
    public authService: AuthService,
  ) {}

  handleNextStep() {
    this.step++;
  }

  login(): void {
    this.authService.login();
  }

  handleClearForm() {
    this.userFormService.clearForm(this.formData);
  }

}
