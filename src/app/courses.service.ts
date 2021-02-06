
export class CoursesService {
    private courses = [
        {id: 1, name: 'Math'},
        {id: 2, name: 'Angular', 
            books: { list: ['ang 1', 'ang 2', 'ang 3']}
        },
        {id: 3, name: 'Rest API'},
        {id: 4, name: 'Cypress'}
    ]

    getCourses () {
        return this.courses;
    }
}