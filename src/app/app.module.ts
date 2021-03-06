import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {DiscordModule} from './discord/discord.module';
import {CoreModule} from './core/core.module';
import {Routes, RouterModule} from '@angular/router';
import { GalleryModule } from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {NgxGalleryModule} from 'ngx-gallery';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MasonryModule} from '@thisissoon/angular-masonry';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AuthGuard} from './core/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AppComponent} from './app.component';
import {LogoComponent} from './logo/logo.component';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatSnackBarModule
} from '@angular/material';
import {GalleryComponent} from './gallery/gallery.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {GroomBrideComponent} from './groom-bride/groom-bride.component';
import {StoryComponent} from './story/story.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {PeopleComponent} from './people/people.component';
import {CalendarLocationComponent} from './calendar-location/calendar-location.component';
import {LocationComponent} from './location/location.component';
import {AppRoutingModule} from './app-routing.module';
import {InvitationComponent} from './invitation/invitation.component';


const routes: Routes = [
  {path: 'notes', component: AppComponent, canActivate: [AuthGuard]},
];


const matImports = [
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatGridListModule
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
    LocationComponent,
    InvitationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    matImports,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    DiscordModule,
    RouterModule.forRoot(routes, {useHash: true}),
    GallerizeModule,
    NgxGalleryModule,
    NgxQRCodeModule,
    LightboxModule.forRoot(),
    GalleryModule.forRoot(),
    MasonryModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
