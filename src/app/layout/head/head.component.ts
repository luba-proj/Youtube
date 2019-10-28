import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  userAdmin:boolean=false;
  constructor(public userService: UserService) {
     if(userService.user.permissions){
      this.userAdmin=true;
     }
     else{
      this.userAdmin=false;
     }
   }
  ngOnInit() {
  }
  logIn(){
    this.userService.userId=0;
  }

}


