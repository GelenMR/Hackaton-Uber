import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { SettingComponent } from './components/setting/setting.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'main', component: MainComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        scrollPositionRestoration: 'enabled' } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
