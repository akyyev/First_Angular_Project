import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  // template: '', // use template or templateUrl
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private title = 'List of Courses';
  courses;

  // Logic for calling an HTTP service
  //dependency injection
  constructor(service: CoursesService) {
    // let service = new CoursesService(); // not good when unit testing this component
    this.courses = service.getCourses();
  }

  courseName;
  addCourse(courseName) {
    let newId = 0;
    if(this.courses.length != 0) {
      newId = this.courses[this.courses.length-1].id;
    }
    this.courses.push({id: newId+1, name: courseName})

  }

  removeCourse(course: Object){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    console.log(this.courses);
  }

  trackCourse(index, course){
    return course? course.id : undefined;
  }


  getTitle() {
    return 'Title: ' + this.title;
  }

  //Example for class binding, check courses.component.html
  // This will add another class value to the button element
  isActive = false;

  ngOnInit(): void {

  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
    this.isActive = !this.isActive;
  }

  divElementClick() {
    console.log('Div element was clicked'); // This will be executed when we click second button, so it will produce event bubbling
    // To stop that happen we use $event.stopPropagation() method.
  }

  onKeyUp($event) {
    console.log('Enter was pressed, and text is: ', $event.target.value);
  }

  onKeyUp2(email) {
    console.log('Enter was pressed, and email is: ', email);
  }

  password = '1234';

  onKeyUpPassword(){
    console.log('You typed: ', this.password);
  }

  // Pipes | | | | to show data more beautiful way

  course = {
    title: "The complete Angular Course",
    rating: 4.975,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }

  longText = "Currently, the product list displays the name and description of each product. The ProductListComponent also defines a products property that contains imported data for each product from the products array in products.ts. The next step is to create a new alert feature that uses product data from the ProductListComponent. The alert checks the product's price, and, if the price is greater than $700, displays a Notify Me button that lets users sign up for notifications when the product goes on sale. This section walks you through creating a child component, ProductAlertsComponent that can receive data from its parent component, ProductListComponent.";


}
