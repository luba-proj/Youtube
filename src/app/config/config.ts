import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'  // <- ADD THIS
  })
  
export class AppConfig {

    private _config: { [key: string]: string };

    constructor() {
        this._config = { 
            PathAPI: 'http://localhost:50290/api/'
        };
    }

    get setting():{ [key: string]: string } {
        return this._config;
    }

    get(key: any) {
        return this._config[key];
    }
};
