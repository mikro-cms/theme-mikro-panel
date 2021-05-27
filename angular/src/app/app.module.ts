import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomHttp } from './custom-http';
import { environment } from 'environments/environment';

import * as exceptionReducer from '@state/exception.reducer';
import * as authReducer from '@state/auth.reducer';
import { AuthEffects } from '@state/auth.effects';
import * as usersReducer from '@state/users.reducer';
import { UsersEffects } from '@state/users.effects';
import * as userReducer from '@state/user.reducer';
import { UserEffects } from '@state/user.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionComponent } from './components/version/version.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenusComponent } from './components/menus/menus.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserComponent } from './components/user/user.component';

import { MomentDirective } from './directives/moment/moment.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    NavbarComponent,
    MenusComponent,
    ListUserComponent,
    MomentDirective,
    UserComponent,
    NavigationComponent,
    MessageComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      loading: exceptionReducer.reducer,
      auth: authReducer.reducer,
      users: usersReducer.reducer,
      user: userReducer.reducer
    }),
    EffectsModule.forRoot([
      AuthEffects,
      UsersEffects,
      UserEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
