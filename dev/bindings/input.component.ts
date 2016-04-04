import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please</h1>
        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" class="form-control" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" class="form-control" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled Out: {{isFilled ? 'yes' : 'no'}}</div>
        <div>Filled Out: {{isValid ? 'yes' : 'no'}}</div>
        <br>
        <button [disabled]="!isValid" class="btn btn-default">Submit</button>
    `,
    outputs: ['submitted'],
})
export class InputComponent {
    myself = {
        name: '',
        age: ''
    };
    isFilled = false;
    isValid = false;

    submitted = new EventEmitter<{name: string, age: string}>();

    onKeyup() {
        if (this.myself.name != '' && this.myself.age != ''){
            this.isFilled = true;
        } else {
            this.isFilled = false;
        }

        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)){
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    onSubmit() {
        this.submitted.emit(this.myself);
    }
}
