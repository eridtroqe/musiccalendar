import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.state';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PostsEffects } from './store/effects/posts.effects';
import { ListPostsComponent } from './list-posts/list-posts.component';





@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      CalendarComponent,
      HeaderComponent,
      ListPostsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      AngularMaterialModule,
      StoreModule.forRoot(reducers, {}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      EffectsModule.forRoot([AuthEffects, PostsEffects])
   ],
   providers: [],
   bootstrap: [AppComponent],
   entryComponents: [ListPostsComponent]
})
export class AppModule { }
