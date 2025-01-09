import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://localhost:7156/api/Contact'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getContacts(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(this.apiUrl);
  }

  submitContact(contact: ContactModel): Observable<any> {
    const url = `${this.apiUrl}/SubmitContact`; // Ajout de SubmitContact à l'URL
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, contact, { headers }).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }
  
  
  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

}
