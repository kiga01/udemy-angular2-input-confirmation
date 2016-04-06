import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">
                <my-input (submitted)="onSubmit($event)" [myself]="myself"></my-input>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">
                 <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
            </div>
        </div>
    `,
    directives: [InputComponent, ConfirmComponent],
})
export class AppComponent {
    myself = {
        name: '',
        age: ''
    };
    confirmedMyself = {
        name: '',
        age: ''
    }

    onSubmit(myself: {name: string, age: string}){
        this.myself = myself;
    }

    onConfirm(myself: {name: string, age: string}){
        this.confirmedMyself = myself;
    }

}
