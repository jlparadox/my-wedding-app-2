import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  user;

  constructor(private auth: AuthService, private db: AngularFirestore, private snackbar: MatSnackBar) {
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

}
