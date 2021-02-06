
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
      .bi-star-fill {
        color: red
      }
      .bi-star {
        background: green
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated // default value us Emulated, 99.9% you will not need to change this
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  @Input('alias-for-is-favorite') isFavorite = false; // to allow inputs on other components...
  // Check app.component.ts, we made isFavorite = true...
  @Output('changeEvent') change = new EventEmitter();
  // change event will be triggered



  clickStar() {
    this.isFavorite = !this.isFavorite;
    this.change.emit( {newValue: this.isFavorite} ); // this will notify or emit an event to the parent
  }

  ngOnInit(): void {
  }


  // --------------- WORD CAPITALIZE ---------------

  word = "";
  capitalized = "";

  capitalize(sentence: string) {
    let words = sentence.toLowerCase().split(' ');
    let notChange = ['of', 'the', 'a', 'are', 'is']

    for(let i=0; i<words.length; i++){
      if(!notChange.includes(words[i])) 
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(' ');
  }

  updateText() {
    this.capitalized = this.capitalize(this.word);
  }

}
