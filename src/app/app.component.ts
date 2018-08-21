import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AuthService} from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Wedding';
  mobileQuery: MediaQueryList;

  links = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    auth.user.subscribe(
      user => {
        if (user) {
          this.links = [
            {route: '/home', icon: 'home', description: 'Home'},
            {route: '/groom_bride', icon: 'favorite', description: 'Groom & Bride'},
            {route: '/story', icon: 'movie', description: 'Our Story'},
            {route: '/greetings', icon: 'card_giftcard', description: 'Greetings & Wishes'},
            {route: '/people', icon: 'account_circle', description: 'Guest List'},
            {route: '/location', icon: 'event', description: 'Location'},
            {route: '/gallery', icon: 'collections', description: 'Gallery'},
            {route: '/rsvp', icon: 'assignment', description: 'RSVP'},
            {route: '/invitation', icon: 'loyalty', description: 'Invitation'},
            {route: 'Logout', icon: 'exit_to_app', description: 'Logout'}
          ];
        } else {
          this.links = [
            {route: '/home', icon: 'home', description: 'Home'},
            {route: '/groom_bride', icon: 'favorite', description: 'Groom & Bride'},
            {route: '/story', icon: 'movie', description: 'Our Story'},
            {route: '/greetings', icon: 'card_giftcard', description: 'Greetings & Wishes'},
            {route: '/gallery', icon: 'collections', description: 'Gallery'},
            {route: '/login', icon: 'face', description: 'Login'},
          ];
        }
      },
      err => {
        console.log('Error occured');
      }
    );
  }


  login() {
    this.auth.googleLogin();
  }


  logout() {
    this.auth.signOut();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
