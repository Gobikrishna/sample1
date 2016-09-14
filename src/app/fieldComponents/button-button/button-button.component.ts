import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-button-button',
    templateUrl: './template/button-button.template.html'
})
export class ButtonButtonComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() valueText: string;


    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}