import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {DiscordModule} from './discord/discord.module';
import {CoreModule} from './core/core.module';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthGuard} from './core/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';

const routes: Routes = [
  {path: 'notes', component: AppComponent, canActivate: [AuthGuard]},
];

const matImports = [MatButtonModule, MatCheckboxModule, MatCardModule];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    matImports,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    DiscordModule,
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
