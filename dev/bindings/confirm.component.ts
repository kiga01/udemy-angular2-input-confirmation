import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this Correct</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span> years old. please click on Confirm if that is ok</p>
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
        <button [disabled]="!isValid" (click)="onConfirm()" class="btn btn-default">Submit</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed'],
})
export class ConfirmComponent {
    myself = {
        name: '',
        age: ''
    };

    isFilled = false;
    isValid = false;

    confirmed = new EventEmitter<{name: string, age: string}>();

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

    onConfirm() {
        this.confirmed.emit(this.myself);
    }
}
