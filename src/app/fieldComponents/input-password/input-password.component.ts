import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-password',
    templateUrl: './template/input-password.template.html'
})
export class InputPasswordComponent {

    value: string;

    @Output()
    valueChanged = new EventEmitter();

    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}