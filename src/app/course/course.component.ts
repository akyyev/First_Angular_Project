import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  catagories = [
    {id:1, name: 'Development'},
    {id:2, name: 'Art'},
    {id:3, name: 'Language'},
  ]

  log(c) {
    console.log(c);
  }

  submit(f) {
    console.log('Form has been submitted');
    console.log('Form body', f.value);
  }

}
