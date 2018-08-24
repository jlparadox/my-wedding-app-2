import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  user: any;

  constructor(public auth: AuthService) {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
