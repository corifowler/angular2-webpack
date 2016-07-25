import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()

export class EmailService {
    private api:string = 'http://admin.prolowputting.com/api/fss/email';

    constructor(private _http: Http) {}

    public sendEmail(formVals) {
        let body = {
            to: 'fowler.cori@gmail.com',
            subject: 'Contact Inquiry',
            body: 'contact form response',
            message: `
                     <div> Name: ${formVals.name} </div>
                     <div> E-mail Address: ${formVals.email} </div>
                      <div> Phone: ${formVals.phoneNumber} </div>
                      <div> Company: ${formVals.companyName} </div>
                      <div> Location: ${formVals.location} </div>
                      <div> Message: ${formVals.message} </div>`,
            from: formVals.email,
            fromName: formVals.name
        };

        return this._http.post(this.api, body)
            .subscribe(res => {
                console.log(res);
            });
    }
}