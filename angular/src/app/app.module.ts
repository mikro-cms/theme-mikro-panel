import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
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
import * as pagesReducer from '@state/pages.reducer';
import { PagesEffects } from '@state/pages.effects';
import * as PageReducer from '@state/page.reducer';
import { PageEffects } from '@state/page.effects';
import * as apisReducer from '@state/apis.reducer';
import { ApisEffects } from '@state/apis.effects';
import * as apiReducer from '@state/api.reducer';
import { ApiEffects } from '@state/api.effects';
import * as resourcesReducer from '@state/resources.reducer';
import { ResourcesEffects } from '@state/resources.effects';
import * as resourceReducer from '@state/resource.reducer';
import { ResourceEffects } from '@state/resource.effects';
import * as rolesReducer from '@state/roles.reducer';
import { RolesEffects } from '@state/roles.effects';
import * as themesReducer from '@state/themes.reducer';
import { ThemesEffects } from '@state/themes.effects';

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
import { ListPageComponent } from './components/list-page/list-page.component';
import { PagesComponent } from './components/pages/pages.component';
import { PageComponent } from './components/page/page.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { ApisComponent } from './components/apis/apis.component';
import { ApiComponent } from './components/api/api.component';
import { ListResourceComponent } from './components/list-resource/list-resource.component';
import { ResourceComponent } from './components/resource/resource.component';
import { SelectRolesComponent } from './components/select-roles/select-roles.component';
import { SelectThemesComponent } from './components/select-themes/select-themes.component';
import { SelectVariantsComponent } from './components/select-variants/select-variants.component';

import { MomentDirective } from './directives/moment/moment.directive';

declare const ENV: any;

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
    VersionComponent,
    ApisComponent,
    ListApiComponent,
    ApiComponent,
    ListResourceComponent,
    ResourceComponent,
    SelectRolesComponent,
    PagesComponent,
    ListPageComponent,
    PageComponent,
    CustomizeComponent,
    SelectThemesComponent,
    SelectVariantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      loading: exceptionReducer.reducer,
      auth: authReducer.reducer,
      users: usersReducer.reducer,
      user: userReducer.reducer,
      pages: pagesReducer.reducer,
      page: PageReducer.reducer,
      apis: apisReducer.reducer,
      api: apiReducer.reducer,
      resources: resourcesReducer.reducer,
      resource: resourceReducer.reducer,
      roles: rolesReducer.reducer,
      themes: themesReducer.reducer
    }),
    EffectsModule.forRoot([
      AuthEffects,
      UsersEffects,
      UserEffects,
      PagesEffects,
      PageEffects,
      ApisEffects,
      ApiEffects,
      ResourcesEffects,
      ResourceEffects,
      RolesEffects,
      ThemesEffects
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
      provide: APP_BASE_HREF,
      useValue: ENV.pageUrl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
