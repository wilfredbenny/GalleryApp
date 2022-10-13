import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Image } from '../model/model';
const apiURL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor( private httpCl:HttpClient ) { }

  get_all():Observable<Image[]>{
    return this.httpCl.get<Image[]>(`${apiURL}files`);
  }
  get_one(id?:any):Observable<Image[]>{
    return this.httpCl.get<Image[]>(`$apiURL/${id}`);
  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${apiURL}upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.httpCl.request(req);
  }

}
