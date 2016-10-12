import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    log(x){
        console.log(x.className);
        console.log(x.value);
    }
}