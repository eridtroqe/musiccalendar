import { Component, OnInit } from '@angular/core';
import { authFalse, authTrue } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { EndpointService } from './endpoint/endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: EndpointService,
              private store: Store<AppState>) {}

ngOnInit() {
const authToken = this.authService.getToken();
if (!authToken) {
this.store.dispatch(authFalse());
} else {
this.store.dispatch(authTrue());
}

}

}
