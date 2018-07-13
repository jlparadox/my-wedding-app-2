import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth.guard';

import {GalleryComponent} from './gallery/gallery.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {GroomBrideComponent} from './groom-bride/groom-bride.component';
import {PeopleComponent} from './people/people.component';
import {RsvpComponent} from './rsvp/rsvp.component';
import {StoryComponent} from './story/story.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {LogoComponent} from './logo/logo.component';
import {LocationComponent} from './location/location.component';


const routes: Routes = [
  { path: 'home', component: LogoComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'groom_bride',      component: GroomBrideComponent },
  { path: 'story',      component: StoryComponent },
  { path: 'greetings',      component: GreetingsComponent },
  { path: 'people',      component: PeopleComponent },
  { path: 'location',      component: LocationComponent },
  { path: 'rsvp',      component: RsvpComponent },
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

