import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-radio',
    templateUrl: './template/input-radio.template.html'
})
export class InputRadioComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}