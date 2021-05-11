import { Injectable } from '@angular/core';
import { IBook } from './book';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BookService {

  constructor(private _httpClient:HttpClient){

  }

  books:IBook[]= [];

  getAllBooks():Observable<IBook[]>{
   return  this._httpClient.get<IBook[]>('assets/api/books/books.json');
  }


}
