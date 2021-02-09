import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler {
    
    handleError(error: any): void {

        // It might be more complecated on your application depending on requirement
        alert('An unexpected error occurred. This is implemented on app-error-handler.ts file ');
        console.log(error);
    }

}