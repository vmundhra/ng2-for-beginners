import { Component } from '@angular/core';

import { AuthorService } from './author.service';

@Component({
    selector: 'authors',
    template: `<h2>Authors (*ngFor with index property)</h2>
               {{ title }}
               <ul>
                    <li *ngFor="let author of authors, let i = index">
                       {{ i + 1}} - {{ author }}
                    </li>
               </ul>
              `,
     providers: [AuthorService]         
})
export class AuthorsComponent {
    title = "The title of authors page";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}