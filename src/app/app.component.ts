
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My angular app: hello-world';

  post = {
    isFavorite: true
  }

  onFavoriteChanged( event: FavoriteChangedEventArgs) {
    console.log('Favorite changed', event.newValue);
  }


  // Like component stuff
  tweet = {
    body: 'Here is the body of a tweet ...',
    isLiked: false,
    likesCount: 10
  }

  // ngIf practice
  phones = ['iphone', 'samsung', 'lg', 'huawei']

  viewMode = 'somew';
  
}
