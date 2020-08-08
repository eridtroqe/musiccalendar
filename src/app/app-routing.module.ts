import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthGuard } from './auth.guard';
import { CalendarResolverService } from './calendar/calendar.resolver';


const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'calendar',
component: CalendarComponent,
canActivate: [AuthGuard],
resolve: { calendar: CalendarResolverService }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
