import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit, OnDestroy {
  user;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private snackbar: MatSnackBar,
              media: MediaMatcher,
              changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.auth.user.subscribe(user => {
      this.user = user;
      this.db.collection('user_details/').doc(this.user.uid).set({
        rsvp_response: ''
      });
      console.log(this.user);
    });
  }

  respondRSVP(accept: boolean) {
    const response = accept ? 'accept' : 'decline';
    this.db.collection('user_details/').doc(this.user.uid).set({
      rsvp_response: response
    });
    this.snackbar.open('Thank you for your response', response, {
      duration: 3000
    });
  }

  ngOnInit() {
    console.log(this.user.uid);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
