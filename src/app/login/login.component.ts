import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { loginRequest } from '../store/actions/auth.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  constructor(public store: Store<AppState>) {}

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.store.dispatch(loginRequest({payload: {email: form.value.email, password: form.value.password}}));

  }
}
