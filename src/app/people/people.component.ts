import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService, User} from '../core/auth.service';

export interface Guest {
  color: string;
  cols: number;
  rows: number;
  text: string;
  photoUrl: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  user;
  currentColSpan: number;
  guests: Guest[] = [
    {text: 'Jamie	Gibbs', cols: 2, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Roland	Fernandez ', cols: 3, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Nora	Reynolds', cols: 2, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Martin	George', cols: 3, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Molly	Neal', cols: 3, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {text: 'Pat	Singleton', cols: 2, rows: 1, color: this.randomizeBGColor(), photoUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
  ];

  constructor(private auth: AuthService, private db: AngularFirestore) { 
    const scope = this;
    const userList = this.db.collection('/users').valueChanges();
    userList.subscribe((users) => {
      let colCounter = 1
      users.forEach(function (userDetail: User) {
        if(colCounter === 1){
          scope.currentColSpan = scope.getRandomInt(2, 3);
        } else {
          scope.currentColSpan = scope.currentColSpan == 3 ? 2 : 3;
        }
        colCounter = colCounter == 2 ? 1 : 2;
        console.log('colCounter: ', colCounter, 'currentColSpan', scope.currentColSpan);
        scope.guests.push({
            text: userDetail.displayName,
            cols: scope.currentColSpan,
            rows: 1,
            color: scope.randomizeBGColor(),
            photoUrl: userDetail.photoURL
        });
      })
    });
  }

  ngOnInit() {
  }

  randomizeBGColor(): string{
    const rand = this.getRandomInt(1, 5);
    if (rand == 1) return "#8597ae";
    if (rand == 2) return "#556984";
    if (rand == 3) return "#7d8fa7";
    if (rand == 4) return "#4c5f79";
    if (rand == 5) return "#b8d5ff";
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
