import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector: 'contact-page',
    template: `
        <div class="contact-container">
            <div class="contact-content">
                <h2>Contact Us</h2>
                <div>
                    <form>
                        <div>
                            <label>* Name:</label>
                            <input type="text">
                        </div>
                        <div>
                            <label>* E-mail Address:</label>
                            <input type="email">
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input>
                        </div>
                        <div>
                            <label>Company:</label>
                            <input type="text">
                        </div>
                        <div>
                            <label>City/State:</label>
                            <input type="text">
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea></textarea>
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
            background-color: #fbfbfc;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .contact-content h2 {
            color: #0b8d45;
            align-self: center;
            margin-bottom: 0;
        }
        .summary {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0;
            align-self: center;
        }
        form {
            margin: 1em;
        }
        button {
            text-align: center;
        }
    `],
    directives: [FORM_DIRECTIVES]
})
export class ContactComponent {}