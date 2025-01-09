import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: ContactModel[] = [];
  contactData: ContactModel = {
    id: 0, // Géré côté serveur
    name: '',
    email: '',
    subject: '',
    saySomething: '',
  };

  // Pour gérer les messages d'état
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private contactService: ContactService  ) {}

  ngOnInit(): void {
    // Charger les contacts existants
    this.contactService.getContacts().subscribe(
      (data) => {
        this.contacts = data;
        console.log('Contacts récupérés:', data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des contacts:', error);
      }
    );
  }

  onSubmit() {
    // Validation des champs obligatoires
    if (!this.contactData.name || !this.contactData.email) {
      this.errorMessage = 'Name and Email are required fields.';
      return;
    }

    this.contactService.submitContact(this.contactData).subscribe(
      (response) => {
        console.log('Contact soumis avec succès:', response);
        this.successMessage = 'Contact submitted successfully!';
        this.errorMessage = '';
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de la soumission:', error);
        this.errorMessage = error.error?.ErrorMessage || 'An unexpected error occurred.';
        this.successMessage = '';
      }
    );
  }

  /**
   * Réinitialise les champs du formulaire.
   */
  private resetForm() {
    this.contactData = {
      id: 0,
      name: '',
      email: '',
      subject: '',
      saySomething: '',
    };
  }
}
