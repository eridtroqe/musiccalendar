import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
// import { PostListComponent } from './posts/post-list/post-list.component';
// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
