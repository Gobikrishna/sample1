import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-textarea',
    templateUrl: './template/textarea.template.html'
})
export class TextareaComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() placeholderVal: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}