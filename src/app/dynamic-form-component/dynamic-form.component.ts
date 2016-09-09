import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import {IFormDetail, FieldType} from '../config.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './template/dynamic-form.template.html'
})
export class DynamicFormComponent implements OnInit {

    @Input()
    formData: IFormDetail
    fieldType: typeof FieldType = FieldType;

    constructor() {

    }

    ngOnInit() {

    }

    @Output()
    valueChanged = new EventEmitter();

    formValueChanged($event: any, field: any) {
        field.value = $event;
        this.valueChanged.emit(this.formData);

        
    }

}
