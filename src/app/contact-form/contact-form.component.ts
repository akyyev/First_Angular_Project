import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

  constructor() { }

  log(x) {
    console.log(x);
  }


  submit(ngFormReference) {
    console.log(ngFormReference);
    console.log(ngFormReference.value);
  }


  contactMethods = [
    {id:1, name : "Email"},
    {id:2, name : "Phone"},
    {id:3, name : "Chat"}
  ]
}
