import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PreferencesComponent } from './components/preferences/preferences.component'

import { AppRoutingModule } from './app-routing.module';
import { SettingComponent } from './components/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SettingComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AngularFireDatabase, AngularFireDatabaseModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
