import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AppConfig } from '../config/config';
import { SearchHistory } from '../models/searchHistory';
import { VideoData } from '../models/videoData';

@Injectable({
  providedIn: 'root'  
})
export class UserService  {
  private pathAPI = this.config.setting['PathAPI'];
  public userId:number=0;
  public userPermissions=false;
  public user:User=new User();
  constructor(private http: HttpClient, private config: AppConfig) {  }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return <Observable<User[]>>this.http.get(this.pathAPI + 'Getusers',{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  addUser(user):Observable<boolean> {
    return this.http.post<boolean>(this.pathAPI + 'InsertUser', user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  getUser(user){
    return this.http.post<User>(this.pathAPI + 'GetUser', user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
        
      })
    });
  }
  getVideos(searchHistory):Observable<any[]>{
    // return this.http.post<any[]>(this.pathAPI + 'GetVideos', JSON.stringify(searchKeyWord),{
    return this.http.post<any[]>(this.pathAPI + 'GetVideos', searchHistory,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
      })
    });

  }

  getUserSearchHistory(user):Observable<SearchHistory[]>
  {
    return this.http.post<SearchHistory[]>(this.pathAPI + 'GetUserSearchHistory', user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
      })
    });
  }

  getUserWatchHistory(user):Observable<VideoData[]>
  {
    return this.http.post<VideoData[]>(this.pathAPI + 'GetUserWatchHistory', user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
      })
    });
  }
  
}