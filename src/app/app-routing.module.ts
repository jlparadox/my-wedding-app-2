import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth.guard';

import {GalleryComponent} from './gallery/gallery.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {GroomBrideComponent} from './groom-bride/groom-bride.component';
import {PeopleComponent} from './people/people.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {InvitationComponent} from './invitation/invitation.component';
import {StoryComponent} from './story/story.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LogoComponent} from './logo/logo.component';
import {LocationComponent} from './location/location.component';


const routes: Routes = [
  { path: 'groom_bride',      component: GroomBrideComponent },
  { path: 'invitation',      component: InvitationComponent },
  { path: 'greetings',      component: GreetingsComponent },
  { path: 'location',      component: LocationComponent },
  { path: 'people',      component: PeopleComponent },
  { path: 'story',      component: StoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'rsvp',      component: RsvpComponent },
  { path: 'home', component: LogoComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }

