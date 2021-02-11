import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './comman/app-error-handler';
import { ErrorHandler } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';

import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { MyFollowersComponent } from './my-followers/my-followers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostComponent,
    MyFollowersComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule, // Contians CommonModule for Pipe stuff
    AppRoutingModule,
    // Forms module is necessary for two way binding
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},

      {path: 'followers', component: MyFollowersComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},
      {path: 'posts', component: PostComponent},
      {path: 'home', component: ContactFormComponent},
      {path: 'favorite', component: FavoriteComponent},
      {path: 'zippy', component: ZippyComponent},
      {path: 'course', component: CourseComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    // services, dependencies...
    CoursesService,
    AuthorService,
    PostService,
    FollowersService,
    // Global error handler - custom implementation
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
