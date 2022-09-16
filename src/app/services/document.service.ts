import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { busqueda,tipedoc } from '../models/document';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class documentService {
  urldocument = 'http://localhost:5000/api/document';
  urlsearch = 'http://localhost:5000/api]/search';
  urlinseret = 'http://localhost:5000/api/insert'


  constructor(
    private http : HttpClient
  ) { }


getAllDoc() : Observable<any>{
return this.http.get(this.urldocument);

  }

  searchDoc(busqueda : busqueda):Observable<any>{

    return this.http.post(this.urlsearch,busqueda)
  }

inseertDocument(document :tipedoc){
  return this.http.post(this.urlinseret,document);

}


updatedocuement(id : any,docuement : any) :Observable<any>{
  return this.http.put(this.urldocument+'/'+id,docuement)

}

getContacByid(id : any):Observable<any>{
  return this.http.get(`${this.urldocument}/${id}`)

}


deledocuement(id: any):Observable<any>{

  return this.http.delete(this.urldocument+'/'+id)
}



}