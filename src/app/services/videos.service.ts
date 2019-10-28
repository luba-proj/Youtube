import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos:any[]=[];
  private pathAPI = this.config.setting['PathAPI'];
  constructor(private http: HttpClient, private config: AppConfig) { }

  setVideoDetails(videoData){
    return this.http.post(this.pathAPI + 'InsertVideoData', videoData,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  updateVideoWatchDuration(videoData){
    return this.http.post(this.pathAPI + 'UpdateVideoWatchDuration', videoData,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
}
