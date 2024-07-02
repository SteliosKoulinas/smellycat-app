import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      postalCode: [''],
      address: [''],
      message: [''],
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        fullName: this.contactForm.get('fullName')?.value,
        email: this.contactForm.get('email')?.value,
        city: this.contactForm.get('city')?.value,
        postalCode: this.contactForm.get('postalCode')?.value,
        address: this.contactForm.get('address')?.value,
        message: this.contactForm.get('message')?.value,
      };
      console.log(templateParams);
      emailjs
        .send(
          'service_x40z81y',
          'template_in9occ4',
          templateParams,
          'aHjN6sxeM4q1jZis6'
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
          }
        );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
