import { Injectable } from '@angular/core';
import{HttpClientModule}from"@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClientModule) { }

  baseurl="https://api.themoviedb.org/3";
  apikey="08cc33bd5ae3a747598ce2ad84376e66";

  
}
