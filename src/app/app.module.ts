import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {DiscordModule} from './discord/discord.module';
import {CoreModule} from './core/core.module';
import {Routes, RouterModule} from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthGuard} from './core/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { GalleryComponent } from './gallery/gallery.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GroomBrideComponent } from './groom-bride/groom-bride.component';
import { StoryComponent } from './story/story.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { PeopleComponent } from './people/people.component';
import { CalendarLocationComponent } from './calendar-location/calendar-location.component';



const routes: Routes = [
  {path: 'notes', component: AppComponent, canActivate: [AuthGuard]},
];

const matImports = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LogoComponent,
    GalleryComponent,
    RsvpComponent,
    GroomBrideComponent,
    StoryComponent,
    GreetingsComponent,
    PeopleComponent,
    CalendarLocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    matImports,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    DiscordModule,
    RouterModule.forRoot(routes, {useHash: true}),
    GalleryModule.forRoot(),
    LightboxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
