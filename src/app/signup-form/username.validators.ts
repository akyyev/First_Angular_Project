import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";

// Custom validator
export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            }
        }

        return null;
    }

    // For simplicity I'm making simple value check, if it's bagtyyar or not
    // Also this is an example for asyncronous call
    // On real world application verifying username is unique or not might take some time, so async comes into play
    // setTimeout is async fn
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if( control.value === 'bagtyyar') resolve( {shouldBeUnique: true});
                else resolve(null);
            }, 1000);
        });
    }
}