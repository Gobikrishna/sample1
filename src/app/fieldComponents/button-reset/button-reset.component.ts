import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-button-reset',
    templateUrl: './template/button-reset.template.html'
})
export class ButtonResetComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() valueText: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}