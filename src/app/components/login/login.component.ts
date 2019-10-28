import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {SearchHistory} from '../../models/searchHistory';
import { VideosService } from 'src/app/services/videos.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit {
  loading = false;
  userName:string='';
  password:string='';
  res:User = new User();
  isLoginClick: boolean =false;
  isGetUser:boolean=false;

  constructor(public userService: UserService,
              public videoService:VideosService,
              private router: Router,
              private alerts: AlertsService){}

  ngOnInit() {

  }
  onKey(){
    this.isGetUser=false;
    }
  login(event: any): void {
      let user:User=new User();
      user.name='';
      user.lastName='';
      user.phoneNumber='';
      user.permissions=false;
      user.userName=this.userName;
      user.password=this.password;
      let searchHistory:SearchHistory=new SearchHistory();
      searchHistory.searchTerm ='Google';
      if(user.userName!='' && user.password!=''){
        this.userService.getUser(user).subscribe(data=>{
        this.res=data;
        this.isGetUser=true;
        if(data.id>0)
        {
          this.userService.user=data;
          this.userService.userId=data.id;
          searchHistory.userId =data.id;

              this.userService.getVideos(searchHistory).subscribe(data=>{
              this.videoService.videos=data;
              this.router.navigate(['/mainPanel']);
              this.isGetUser=false;
              this.isLoginClick=false;
            });
        }
        else{
          this.alerts.setMessage('Invalid user name or password','warn');
        }
      });
    }
    else{
      this.alerts.setMessage('All the fields are required','warn');
    }
  }

} 

