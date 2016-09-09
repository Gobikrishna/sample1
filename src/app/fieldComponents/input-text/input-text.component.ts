import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-text',
    templateUrl: './template/input-text.template.html'
})
export class InputTextComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}