import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnDestroy{
  title = 'Wedding';
  mobileQuery: MediaQueryList;

  links = [
    'Home',
    'Groom & Bride',
    'Our Story',
    'Greetings',
    'People',
    'When & Where',
    'Gallery',
    'RSVP',
    'Login'];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy (): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
