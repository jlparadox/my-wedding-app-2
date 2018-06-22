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
            {route: '/home', icon: 'home'},
            {route: '/groom_bride', icon: 'favorite'},
            {route: '/story', icon: 'movie'},
            {route: '/greetings', icon: 'card_giftcard'},
            {route: '/people', icon: 'account_circle'},
            {route: '/location', icon: 'event'},
            {route: '/gallery', icon: 'collections'},
            {route: '/rsvp', icon: 'assignment'},
            {route: 'Logout', icon: 'exit_to_app'}
          ];
        } else {
          this.links = [
            {route: '/home', icon: 'home'},
            {route: '/groom_bride', icon: 'favorite'},
            {route: '/story', icon: 'movie'},
            {route: '/greetings', icon: 'card_giftcard'},
            {route: '/people', icon: 'account_circle'},
            {route: '/location', icon: 'event'},
            {route: '/gallery', icon: 'collections'},
            {route: '/login', icon: 'face'},
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
