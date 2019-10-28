import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl , SafeResourceUrl} from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { SearchHistory } from 'src/app/models/searchHistory';
import { VideosService } from 'src/app/services/videos.service';
import { VideoData } from 'src/app/models/videoData';



@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})

export class MainPanelComponent implements OnInit {
  youtubeUrl: SafeResourceUrl;
  youtubeUrl2:string;
  id:string;
  currentSongName:string;
  videos:any[]=[];
  searchTerm:string="";
  player: YT.Player;
  eventPlayer:any;

  constructor(public sanitizer: DomSanitizer,
              public videoService:VideosService,
              public userService: UserService) { 
    this.videos=this.videoService.videos;
    this.id=this.videos[0].id.videoId;
   this.youtubeUrl2='https://www.youtube.com/embed/'+ this.videos[0].id.videoId+'/'
   this.currentSongName = this.videos[0].snippet.title;  
   this.saveVideoData();
  }

  ngOnInit() {
  }

  savePlayer(player){
    this.player=player;
    this.player.playVideo();
  }
  onStateChange(event){
    this.eventPlayer=event.data;
  }
  saveVideoData(){
      let videoData:VideoData=new VideoData();
      videoData.userId=this.userService.userId;
      videoData.videoURL=this.youtubeUrl2;
      this.videoService.setVideoDetails(videoData).subscribe();
  }
  getVideo(video:any){
  this.id=video.id.videoId;
  let videoData:VideoData=new VideoData();
  videoData.duration=this.player.getCurrentTime();
  videoData.userId=this.userService.userId;
  videoData.videoURL=this.youtubeUrl2;
  if(videoData.duration && videoData.duration>0){
    this.videoService.updateVideoWatchDuration(videoData).subscribe();
  }
  else{
    videoData.duration = 0
    this.saveVideoData();
  }
  this.player.loadVideoById(this.id);
   this.youtubeUrl2='https://www.youtube.com/embed/'+ video.id.videoId+'/'
   this.currentSongName = video.snippet.title;
   this.saveVideoData();
  }

  serchTerm(){
    let searchHistory:SearchHistory=new SearchHistory();
    searchHistory.searchTerm =this.searchTerm;
    searchHistory.userId=this.userService.userId;
    this.userService.getVideos(searchHistory).subscribe(data=>{
      this.videoService.videos=data;
      this.videos=data;
  });

  }
}
