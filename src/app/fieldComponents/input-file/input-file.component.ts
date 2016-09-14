import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-file',
    templateUrl: './template/input-file.template.html'
})
export class InputFileComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}