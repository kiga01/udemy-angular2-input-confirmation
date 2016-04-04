import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">
                <my-input (submitted)="onSubmit($event)"></my-input>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 input-container">

            </div>
        </div>
    `,
    directives: [InputComponent],
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

}
