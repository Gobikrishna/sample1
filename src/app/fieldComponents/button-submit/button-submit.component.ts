import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'field-button-submit',
    templateUrl: './template/button-submit.template.html'
})
export class ButtonSubmitComponent {

    value: string;


    @Output()
    valueChanged = new EventEmitter();


    @Input() label: string;
    @Input() valueText: string;

    inputValueChanged() {
        this.valueChanged.emit(this.value);
    }

}