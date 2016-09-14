import {OpaqueToken, NgZone, Injectable} from '@angular/core';

export let OAppConfig = new OpaqueToken('app.config');

export enum FieldType {
    Text,
    Password,
    Select,
    Email,
    Radio,
    Checkbox,
    File,
    Button,
    Submit,
    Reset,
    Textarea
}

export interface IField {
    label: string;
    placeholder: string;
    value: string;
    type: FieldType
}

export interface IFormDetail {
    heading: string;
    formFields: IField[];
}

export interface IAppConfig {
    settings: {
        header: {
            backgroundColor: string
        },
        footer: {
            backgroundColor: string
        },
        fields: {
            [key: string]: IFormDetail
        }
    }
}

export const APP_CONFIG: IAppConfig = {
    settings: null
};