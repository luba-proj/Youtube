import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { SearchHistory } from 'src/app/models/searchHistory';
import { VideoData } from 'src/app/models/videoData';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
users:User[]=[];
selectedUser: User;
searchHistoryList:SearchHistory[]=[];
headElementsSearchHistory:string[]=[];
watchHistoryList:VideoData[]=[];
headElementswatchHistory:string[]=[];

  constructor(public userService: UserService) {
    this.headElementsSearchHistory.push('Search Term');
    this.headElementswatchHistory.push('Url');
    this.headElementswatchHistory.push('Watch Duration');

    this.userService.getUsers().subscribe(data=>{
     this.users=data;
    });
   }

  ngOnInit() {
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  
    this.userService.getUserSearchHistory(user).subscribe(data=>{
      this.searchHistoryList=[];
      this.searchHistoryList=data;});

    this.userService.getUserWatchHistory(user).subscribe(data=>{
      this.watchHistoryList=[];
      this.watchHistoryList=data;
      this.watchHistoryList.forEach(w => {
        w.durationString =this.time_convert(w.duration);
      });
    });
  }

 time_convert(num:number):string
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return (hours + ":" + minutes).toString();         
}

}
