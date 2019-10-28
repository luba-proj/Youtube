import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  res:boolean=false;
  name: string = '';
  lastName:string='';
  phoneNumber:string='';
  userName:string='';
  password:string='';
  password2:string='';
  isValid:boolean=false;

  constructor(public userService: UserService,
              private router: Router,
              private alerts: AlertsService) { }

  ngOnInit() {
  }

  onCreateUser(){
   if(this.name!='' && this.lastName!='' &&
      this.phoneNumber!='' && this.userName!='' && 
      this.password!='' && this.password2!='') {
        if(this.password!=this.password2){
          this.alerts.setMessage('Password and Confirm Password does not match','warn');
        }
        else{
          let user:User=new User();
          user.name=this.name;
          user.lastName=this.lastName;
          user.phoneNumber=this.phoneNumber;
          user.userName=this.userName;
          user.password=this.password;
          user.permissions=false;
          this.userService.addUser(user).subscribe(data=>{
            this.res=data;
            if(data){
              this.router.navigate(['/login']);
            }
            else{
              this.alerts.setMessage('This user alredy exist','warn');
            }
          });
        }
   }
   else{
    this.alerts.setMessage('All the fields are required','warn');
   }
  }
}
