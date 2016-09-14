import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-checkbox',
    templateUrl: './template/input-checkbox.template.html'
})
export class InputCheckboxComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}