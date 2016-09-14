import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-input-email',
    templateUrl: './template/input-email.template.html'
})
export class InputEmailComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}