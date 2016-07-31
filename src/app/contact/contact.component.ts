import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'contact-page',
    template: `
        <div class="contact-container">
            <div class="contact-content">
                <h2>Contact Us</h2>
                <div>
                    <form [formGroup]="contactForm" (submit)="submitForm(contactForm.value)" >
                        <div class="form-element">
                            <label>* Name:  </label>
                            <input type="text"
                                   formControlName="name"
                                   required>
                        </div>
                        <div class="form-element">
                            <label>* E-mail:</label>
                            <input type="email"
                                   formControlName="email"
                                   required>
                        </div>
                        <div class="form-element">
                            <label>  Phone: </label>
                            <input formControlName="phoneNumber">
                        </div>
                        <div class="form-element">
                            <label>Company: </label>
                            <input type="text"
                                   formControlName="companyName">
                        </div>
                        <div class="form-element">
                            <label>City/State:</label>
                            <input type="text"
                                   formControlName="location">
                        </div>
                        <div class="form-element">
                            <label>Message:</label>
                            <textarea formControlName="message"
                                required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .contact-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .contact-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .contact-content h2 {
            color: #0b8d45;
            align-self: center;
            margin-bottom: 0;
            font-size: 1.875em;
        }
        .form-element {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0;
            align-self: center;
            margin-top: 0.5em;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        form {
            margin: 1em;
        }
        button {
            text-align: center;
            padding: 0.5em;
            border: 1px solid #2d2d72;
            width: 20em;
            font-size: 1em;
            background-color: white; 
            margin: 3em 6em;
            color: #2d2d72;
        }
        input, textarea {
            border: 1px solid #2d2d72;
            padding: 1em;
            width: 24em;
        }
        textarea {
            height: 7em;
        }
        label {
            margin-right: 2em;
        }
    `],
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class ContactComponent {
    public contactForm: FormGroup;

    constructor(private _emailService: EmailService, private _formBuilder: FormBuilder) {
        this.contactForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            phoneNumber: new FormControl(''),
            companyName: new FormControl(''),
            location: new FormControl(''),
            message: new FormControl('')
        });
    }

    private submitForm(formVals) {
        this._emailService.sendEmail(formVals);
    }

}